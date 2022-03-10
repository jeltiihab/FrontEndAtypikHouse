import { Route } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./CardsProperties.module.css";
import Cabanes from "./Cabanes/Cabanes";
import Contact from "../../../../pages/contact";
import axios from "axios";
import InfoCards from "./InfoCards";
import property from "../../../../pages/property";
import Link from 'next/link';
import propertiesData from "../../../data/propertiesData";
import Pagination from '../Pagination/Pagination'
import ReactPaginate from 'react-paginate';
import { useRouter } from "next/router";
import { Field, Formik } from "formik";
import FilAriane from "../../ui/FilAriane/FilAriane";
import arianeStyle from "../../ui/FilAriane/FilAriane.module.css";






const CardsProperties = ({ navigationData, currentRoute, setCurrentRoute, props }) => {

    const [cards, setCards] = useState([]);  // revoir le axios get d'ihab
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10); // nombre de cards affiché 

    const getNavProp = useCallback((item) => {
        switch (item) {
            case "Cabanes":
                return "Cabanes";

            case "Bulles":
                return "Bulles";

            case "En Amoureux":
                return "En Amoureux";

            case "En famille":
                return "En famille";

            case "A l aventure":
                return "A l aventure";
        }
    }, []);

    // pagination

    const indexofLastCards = currentPage * cardsPerPage;
    const indexOfFirstCards = indexofLastCards - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCards, indexofLastCards);

    const pagination = (pageNumber) => setCurrentPage(pageNumber)



    return (

        <>
            <FilAriane prevPageAriane="Acceuil" currentPageAriane="Nos Biens" arianeStyle="px-10" />
            <div className={styles.containerNav}>
                <div className={styles.contentMove}>
                    <nav className={styles.centerbar}>
                        {navigationData.map((item, index) => (
                            <div
                                key={index}
                                className={classNames([
                                    styles.tabItem,
                                    currentRoute === item && styles.tabItemActive,
                                ])}
                                onClick={() => setCurrentRoute(item)}
                            >
                                <span>{getNavProp(item)}</span>
                            </div>
                        ))
                        }
                    </nav>
                </div>
                    {propertiesData?.map(item => (
                        <Link href={{ pathname: '/property', query: {id: item.id} }}>
                            <div>
                            <div className="">
                                <div className={styles.gridContent}>
                                    <div className={styles.place}>
                                        <div className="grid grad-cols-3 gap-4">
                                            <InfoCards id={item.id} cards={currentCards}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </Link>
                ))}

                <Pagination
                    totalCards={propertiesData.length}
                    cardsPerPage={cardsPerPage}
                    pagination={pagination}
                />

            </div>

        </>

    )
};


export default CardsProperties;



