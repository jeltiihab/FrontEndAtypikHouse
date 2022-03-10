import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from "crypto-js";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    const Router = useRouter()
    var CryptoJS = require("crypto-js");

    let [accessToken, setaccessToken] = useState(null)
    let [user, setUser] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    let loginUser = async (e) => {
        e.preventDefault()
        let response = await axios.post("/login", {
            'email':e.target.username.value,
            'password':e.target.password.value
        }, {
            headers:{
                'Content-Type':'application/json'
            },
          })

        if(response.status === 200 && response.data.message == "Unauthorized") {
            toast.error("veuillez vérifier votre email/mot de passe", {theme: 'colored'});
            return;
        }
        if( response.status === 200 && response.data.message == "email must verified" ) {
            Router.push('/emailverification')
        }
        if(response.status === 200 && response.data.message == "login success") {
            /*if (typeof window !== 'undefined') {
                // Perform localStorage action
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '';
                console.log(localStorage.getItem('access_token'));
            }*/
            setaccessToken(response.data.access_token)
            setUser(response.data.user)
            localStorage.setItem('access_token', "Bearer "+response.data.access_token)
            localStorage.setItem('user', CryptoJS.AES.encrypt( JSON.stringify(response.data.user), "Bearer "+response.data.access_token ).toString())
            setIsAuthenticated(true);
            //userToken.roles.includes('ROLE_ADMIN') ? Router.push('/admin') : Router.push('/profil')
            Router.push('/profil')
        }
    }

    let logoutUser = () => {
        setaccessToken(null)
        setUser(null)
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        setIsAuthenticated(false);
        Router.push('/login')
    }

    let contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        isAuthenticated: isAuthenticated,
        isLoading: isLoading
    }

    useEffect(() => {
        const token = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : ''
        if (token !==''){
            setaccessToken(token)
            let bytes  = CryptoJS.AES.decrypt(localStorage.getItem('user'), token);
            let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setUser(decryptedData)
            setIsAuthenticated(true);
            //Router.push('/')
        }
        setIsLoading(false);

    }, [])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    )
}