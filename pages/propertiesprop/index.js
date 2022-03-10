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
    const [propertieData, setPropertieData] = useState([]);

  // Create data Memo
  const propertieDataMemo = useMemo(() =>
    [...propertieData], [propertieData]
  );
  // Columns Memo
  const propertiesColumns = useMemo(
    () =>
    propertieData[0]
        ? Object.keys(propertieData[0])
            .filter((key) => key !== "birthDay")
            .map((key) => {
                let name ="";
                switch (key) {
                    case "rooms":
                        name = "rooms"
                        break;
                    case "surface":
                        name = "surface"
                        break;
                    case "hosting_capacity":
                        name = "Nombre de personnes"
                        break;
                    case "price":
                        name = "prix"
                        break;
                    default:
                        break;
                }
            return { Header: name, accessor: key };
            })
            : [],
        [propertieData]
    );

  const {
    getTableProps, getTableBodyProps, state, setGlobalFilter, headerGroups, rows, prepareRow, page, nextPage, previousPage, canNextPage, canPreviousPage, selectedFlatRows
  } = useTable(
    {
      columns: propertiesColumns,
      data: propertieDataMemo,
      initialState: {
        pageIndex: 0,
        hiddenColumns: ['id', 'name', 'user_id', 'category_id', 'description', 'location', 'check_in_at', 'check_out_at', 'rate', 'reviews', 'is_activated', 'images', 'created_at', 'updated_at', 'deleted_at', 'equipments', 'dynamic_attributes']
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
          Header: "Nom du bien",
          Cell: ({ row }) => (
            <div>
              <Link href={{ pathname: 'property', query: { id: row.values.id } }}>{row.values.name}</Link>
            </div>
          ),
        },

        ...columns,
          {
              id: "created_att",
              Header: "Date de création",
              Cell: ({ row }) => (
                  <div>
                      { new Date(row.values.created_at).getFullYear()+' - '+(new Date(row.values.created_at).getMonth() + 1)+' - '+new Date(row.values.created_at).getDate()  }
                  </div>
              ),
          },{
              id: "imagess",
              Header: "images",
              Cell: ({ row }) => (
                  <div className='inline-flex items-center space-x-4'>
                      <img
                          className='w-10 h-10 object-cover rounded-full'
                          alt='User avatar'
                          src={"http://api.f2i-cw1-ij-hc-nag.fr/uploads/"+JSON.parse(row.values.images)?.img0}
                      />
                  </div>
              ),
          },
      ]);
    }
  
  );

  useEffect(() => {
      if(!router.isReady) return;
    axios.get('/propertie/user')
      .then( (response) => {
        if (response.status == 200 && response?.data){
          const propertieDataMemo = response?.data;
          setPropertieData(propertieDataMemo)
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