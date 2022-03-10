import React, {useContext, useState, useEffect, useMemo} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHistory,
  faSuitcase,
  faCookieBite,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import AuthContext from '../../context/AuthContext'
import withAuth from '../../utils/withAuth'
import axios from 'axios';
import { useGlobalFilter, useSortBy, useTable, usePagination, canPreviousPagen, canNextPage, useRowSelect, useRowState } from "react-table";
import GlobalFilter from '../../utils/datatableGlobalFilter'
import FullPageLoader from "../../src/components/ui/Spinner/FullPageLoader";
import { useRouter } from "next/router";

// ne pas oubliez la page de la résilliation du compte client

function Index() {

    const router = useRouter();
    let {isAuthenticated, user, logoutUser, isLoading} = useContext(AuthContext)
  const [reservationData, setReservationData] = useState([]);

  // Create data Memo
  const reservationDataMemo = useMemo(() =>
    [...reservationData], [reservationData]
  );
  // Columns Memo
  const reservationsColumns = useMemo(
    () =>
    reservationData[0]
        ? Object.keys(reservationData[0])
            .filter((key) => key !== "birthDay")
            .map((key) => {
                let name ="";
                switch (key) {
                    //case "name":
                        //name = "Nom du bien"
                        //break;
                        case "created_at":
                        name = "Date de réservation"
                        break;
                        case "price":
                        name = "prix"
                        break;
                        case "hosting_capacity":
                        name = "Nombre de personnes"
                        break;
                    default:
                        break;
                }
            return { Header: name, accessor: key };
            })
            : [],
        [reservationData]
    );

  const {
    getTableProps, getTableBodyProps, state, setGlobalFilter, headerGroups, rows, prepareRow, page, nextPage, previousPage, canNextPage, canPreviousPage, selectedFlatRows
  } = useTable(
    {
      columns: reservationsColumns,
      data: reservationDataMemo,
      initialState: {
        pageIndex: 0,
        hiddenColumns: ['property_id', 'id', 'name']
     },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push((columns) => [
        
        {
          id: "namee",
          Header: "Nom",
          Cell: ({ row }) => (
            <div>
              <Link href={{ pathname: 'property', query: { id: row.values.property_id } }}>{row.values.name}</Link>
            </div>
          ),
        },
        ...columns,
      ]);
    }
  
  );

  useEffect(() => {
    axios.get('/reservations/user-loc')
      .then( (response) => {
        if (response.status == 200 && response?.data){
          const reservationDataMemo = response?.data;
          setReservationData(reservationDataMemo)
        }
        
      })
      .catch((error) => {
          console.log(`We have a server error`, error);
      });
    
      
  }, [isAuthenticated, isLoading])
  const {globalFilter} = state
    if (isLoading || !isAuthenticated) {
        return <FullPageLoader />;
    }
  return (
    <div className='container'>



      <div className="pt-20 pl-20 mb-4">
        <h3 className="pb-2">
        <Link href="/"><a >Accueil</a></Link> / 
        <Link href="/profil"><a > Profil</a></Link> /
        <Link href="/reservationhistoryloc"><a > Mes réservations</a></Link>
        </h3>
        <div className='p-6 shadow-md cursor-pointer flex gap-6'>
                        
          <FontAwesomeIcon
            className='h-8 text-green-900'
            size='xs'
            icon={faSuitcase}
          />
          <label className='pt-1'>Historique des réservations</label>
        </div>
      </div>

      
      <span>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      </span>
      <table {...getTableProps()} className="min-w-full leading-normal mx-6 my-5">
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {column.render("Header")}
                    {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                    </th>
                ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {page.map((row, idx) => {
                prepareRow(row);
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell, idx) => (
                    <td {...cell.getCellProps()} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {cell.render("Cell")}
                    </td>
                    ))}
                </tr>
                );
            })}
        </tbody>
      </table>


      <div className="relative text-center">
        <button disabled={!canPreviousPage} onClick={() => previousPage()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button disabled={!canNextPage} onClick={() => nextPage()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>
      <div className='flex justify-end'>
        <Link href='/profil'>
          <a href='#'>
            <button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2 right m-6'>
              Retour
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Index;