import React from 'react';
import WelcomBanner from "../../src/components/core/WelcomeBanner/WelcomeBanner";
import styles from "../login/login.module.css"
import ButtonStyle from '../../src/components/ui/Buttons/Buttons.module.css'
import { Formik, Form, ErrorMessage } from 'formik';
import axios from "axios";
import DateControl from "../../src/components/ui/FormInputs/Datepicker"
import Input from "../../src/components/ui/FormInputs/Input"
import Select from "../../src/components/ui/FormInputs/Select"
import CheckBox from "../../src/components/ui/FormInputs/CheckBox"
import { userRoleOptions, userSexe } from "../../utils/StaticData"
import { userschema } from "../../utils/Schemas"
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {

    var CryptoJS = require("crypto-js");
    
    const Router = useRouter()

    // This options will be mapped to create inputs from components
    const checkBoxOptions = [
        {key: "J\'accepte la politique de confidentialité", value: 'terms'}
    ];

    // Initial Values of form
    const initialValues = {
        userRole: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        sexe: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        termsOfService: []
    };

    const handleOnSubmit = async (values) => {
        // Convert the date to dd-mm-yyyy format
        const birthDate = values.birthDate;
        const FormatDate =
            birthDate.getDate() +
            "-" +
            (birthDate.getMonth() + 1) +
            "-" +
            birthDate.getFullYear();
        // Assing data with converted date to data
        const data = {...values, birthDate: FormatDate};
        //console.log(data);
        // Making post http request
        const response = await axios.post("/register", data)
            .catch((err) => {
                if(err && err.response)
                    console.log("Error", err);
            });
        // if there is a response and a data then success
        if(response && response.data && response?.data?.access_token !== undefined) {
            localStorage.setItem('access_token', "Bearer "+response.data.access_token)
            localStorage.setItem('user', CryptoJS.AES.encrypt( JSON.stringify(response.data.data), "Bearer "+response.data.access_token ).toString())
            Router.push('/emailverification')
            //setSuccess(response.data.message);
        } else {
            toast.error("Une erreur est survenue veilleur vérifié votre saisie", {theme: 'colored'});
            return;
        }
    }
    /*const formik = useFormik ({
        initialValues: {
            userRole: "",
            firstName: "",
            lastName: "",
            birthDay: "",
            sexe: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            validationSchema: userschema,
            onSubmit: (values, actions) => {
                alert(values);
                console.log(values);
                actions.resetForm();
            },
        }
    })*/
    /*const formik = useFormik({
        initialValues: {
            userRole: "",
            firstName: "",
            lastName: "",
            birthDay: "",
            sexe: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        userschema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });*/

    return (
        <div>
            <Formik
                initialValues={{
                    ...initialValues
                }}
                validationSchema={userschema}
                onSubmit={handleOnSubmit}
            >
                {(formik,errors, touched )=> (
                    <div className={styles.loginContainer}>
                        {/* START right side of the login page */}
                        <div className={styles.leftSideRegister} style={{marginBottom: '40rem', height: '100vh'}}>
                            <div className={styles.welcomeMsg}>
                                <h1 className={styles.AtypikhouseLabel}>Bonjour</h1>
                                <h2>Bienvenue</h2>
                                <Form className={styles.loginForm} autoComplete="off">
                                    <div className={styles.formInputsContainer}>
                                        <Input label="Nom" name="lastName" type="text"/>
                                        <Input label="Prénom"  name="firstName" type="text"/>
                                        <div className={styles.middleInputContainer}>
                                            <Select label="Vous êtes ?"  name="userRole" options={userRoleOptions}/>
                                            <Select label="Sexe"  name="sexe" options={userSexe}/>
                                            <DateControl label="Date de naissance"  name="birthDate"/>
                                        </div>
                                        <Input label="Télephone"  name="phone" type="text"/>
                                        <Input label="Email"  name="email" type="email"/>
                                        <Input label="Mot de pass"  name="password" name="password" type="password"/>
                                        <Input label="Confirmer le mot de pass"  name="password_confirmation" type="password"/>
                                    </div>
                                    <div className="flex justify-center my-6">
                                        <CheckBox name="termsOfService" options={checkBoxOptions}/>
                                    </div>
                                    <div>
                                        <button className={ButtonStyle.greenMdButton} type="submit">
                                            S'inscrire
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                        <WelcomBanner/>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Index;