import { Formik, Form, ErrorMessage } from 'formik';
import Link from 'next/link';
import styles from './AdressAddProperties.module.css'
import buttonStyle from '../../ui/Buttons/Buttons.module.css';
import AppButton from '../../ui/Buttons/Buttons';
import Input from "../../ui/FormInputs/Input"
import axios from "axios";
import * as yup from "yup"



// https://developer.here.com/blog/street-address-validation-with-reactjs-and-here-geocoder-autocomplete
function AdressAddProperties() {

    const postalCodeRegExp = /^(?:[0-8]\d|9[0-8])\d{3}$/;

    // Initial Values of form
    const initialValues = {
        adress: "",
        city: "",
        country: "",
        postalCode: "",

    };

    const handleOnPerfect = async (values) => {


        // Assing data with converted date to data
        const data = { ...values };
        console.log(data);
        // Making post http request
        const response = await axios.post("http://localhost:8000/api/adress", data)
            .catch((err) => {
                if (err && err.response)
                    console.log("Error", err);
            });

        // if there is a response and a data then success
        if (response && response.data) {
            setSuccess(response.data.message);
        }
        alert("OK")
    }

    // Adding the schema for User with Yup
    const userschema = yup.object().shape({
        adress: yup
            .string()
            .required("L'adresse est un champ obligatoire")
            .min(5, "L'adresse saisie doit comporter au moins 5 caractères"),

        city: yup
            .string()
            .required("La ville est un champ obligatoire")
            .min(3, "La ville doit comporter au moins 3 caractères"),


        country: yup
            .string()
            .required("Le pays est un champ obligatoire")
            .min(3, "Le pays doit comporter au moins 3 caractères"),

        postalCode: yup
            .string()
            .matches(postalCodeRegExp, 'Le code postal n\'est pas valide'),

    });


    return (
        <div className={styles.container}>
            <div className={styles.itemsContent}>
                <div className={styles.AdressContainer}>

                    <Formik
                        initialValues={{
                            ...initialValues
                        }}
                        validationSchema={userschema}
                        onSubmit={handleOnPerfect}
                    >

                        {(formik, errors, touched) => (
                            <div className={styles.input}>
                                <div className={styles.containerTitle}>
                                    <svg class="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                        <g>
                                            <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                                            <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                                            <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                                        </g>
                                    </svg>
                                    <h1 class={styles.titleAdress}>Veuillez ajouter l'adresse de votre biens</h1>
                                </div>
                                <Form autoComplete="off">
                                    <div>
                                        <Input className={styles.adress} label="Adresse" name="adress" type="text" value={this.props.adress}/>

                                        {/* <input placeholder="Adresse" class={styles.adress} /> */}
                                    </div>

                                    <div>
                                        <Input className={styles.adress} label="Code Postal" name="postalCode" type="number" min={0} value={this.props.postalCode}/>
                                    </div>

                                    <div>
                                        <Input className={styles.adress} label="Ville" name="city" type="text" value={this.props.city} />
                                        <Input className={styles.adress} label="Pays" name="country" type="text" value={this.props.county} />
                                    </div>

                                    <Link href="" >

                                        <AppButton Content="Parfait" styleparam={buttonStyle.blackWideButton} />
                                    
                                    </Link>
                                   
                                </Form>
                            </div>

                        )}

                    </Formik>





                    {/* <div className={styles.input}>
                        <div className={styles.containerTitle}>
                            <svg class="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g>
                                    <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                                    <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                                    <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                                </g>
                            </svg>
                            <h1 class={styles.titleAdress}>Veuillez ajouter l'adresse de votre biens</h1>
                        </div>

                        <div>
                            <input placeholder="Adresse" class={styles.adress} />
                        </div>
                        <div>
                            <input placeholder="country" class={styles.adress} />
                        </div>
                        <div>
                            <input placeholder="Code Postal" class={styles.adress} />
                        </div>

                    </div>

                    <AppButton Content="Parfait" styleparam={buttonStyle.blackWideButton} /> */}

                </div>

            </div>

        </div >
    )
}

export default AdressAddProperties
