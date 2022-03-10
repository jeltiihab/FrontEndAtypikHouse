import styles from "./SearchPage.module.css"
import { useRouter } from 'next/router'
import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import Card from "../../src/components/ui/Cards/Card";
import SearchBar from "../../src/components/core/SearchBar/SearchBar";

export default function SearchPage(props) {

    const router = useRouter()
    let param="";
    //console.log(router.query.location);
    switch (router.query.location) {
        case "Paris":
            param="Paris"
            break;
        case "Marseille":
            param="Marseille"
            break;
        case "Toulouse":
            param="Toulouse"
            break;
        case "Toulon":
            param="Toulon"
            break;
        case "Lyon":
            param="Lyon"
            break;
        case "Montpellier":
            param="Montpellier"
            break;
        case "Mayenne":
            param="Mayenne"
            break;
        case "Montpellier":
            param="Montpellier"
            break;
    }

    const [searchedCity, setsearchedCity] = useState([]);

    const getsearchedCityData = ()  => {
        axios.get('/properties')
            .then( (response) => {
                //setCards(response.data)
                const searchedCityData = response.data['hydra:member'];
                setsearchedCity(searchedCityData);
                console.log(searchedCityData);
            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });
    }

    useEffect(getsearchedCityData, []);

    return (
        <div>
        <div className={styles.searchContainerCity}>
            <SearchBar/>   
        </div>
        <div className={styles.titleContainer}>
        <h2 className={styles.title}>Nos Biens à {param}</h2>
        </div>
            <div className={styles.propertiesContainer}>
            {
                searchedCity?.map((item,i) => {
                    if(item.location === param) {
                        return (
                                <Card propertyData={[item]} />
                        )
                    }
                })
            }
        </div>
        </div>

    )
}
