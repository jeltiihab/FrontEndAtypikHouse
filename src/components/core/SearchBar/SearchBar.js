import React, { useRef, useState, useEffect, useForm } from "react";
import Input from "../../ui/FormInputs/Input"
import Select from "../../ui/FormInputs/Select"
import * as yup from "yup"
import styles from './searchbar.module.css'
import ButtonStyle from '../../ui/Buttons/Buttons.module.css'
import { useRouter } from "next/router";
import { Formik, Form, ErrorMessage, Field, useFormik } from 'formik';

export default function SearchBar() {
    
        const router = useRouter();
        const queries = router.query;
        const regInput = useRef();

        // Schema validation for Serach form
        const searchschema = yup.object().shape({
            destination: yup.string().required("Veuillez indiquer votre destination"),
            arrival: yup.string().required("Veuillez indiquer la date de d'arrivée").nullable(),
            departure: yup.string().required("Veuillez indiquer la date de départ").nullable(),
            maxTravelers: yup.string().required("Veuillez indiquer le nombre de voyageurs "),
        });
    
    
        // Options to be mapped with our custom select 
        const maxTravelersOptions = [
            {key: 'Nombre de voyageurs', value: ""},
            {key: '1', value: 1},
            {key: '2', value: 2},
            {key: '3', value: 3},
            {key: '4', value: 4},
            {key: '5', value: 5},
        ];
        
        
        // Initial Values of form
        const initialValues = {
            destination: "",
            arrival: "",
            departure: "",
            maxTravelers: ""
        };
            

        // This function collect search data and send it to search page
        const handleOnSubmit = (values) => {
            router.push({
                pathname: "/search",
                query: {
                destination: values.destination,
                arrival: values.arrival,
                departure: values.departure,
                maxTraveler: values.maxTravelers,
                },
            });
        }


    return (
        <div className={styles.searchBarContainer}>
            <Formik
                        initialValues={{
                            ...initialValues
                        }}
                        validationSchema={searchschema}
                        onSubmit={handleOnSubmit}
                    >
                        {(formik,errors, touched )=> (
                    <Form className={styles.BannerCalendar}>
                            <Input name="destination" id="destination" type="text" placeholder={(queries?.destination)?queries?.destination:"Destination"}
                            />
                            <Input name="arrival" type="date"
                            />
                            <Input name="departure" type="date"
                            />
                            <Select  name="maxTravelers" options={maxTravelersOptions}
                            />
                            <div className={styles.buttonDiv}>
                                <button className={ButtonStyle.greenMdButton} type="submit">
                                            Rechercher
                                </button>
                            </div>
                    </Form>
                    )}
            </Formik>
        </div>
    )
}
