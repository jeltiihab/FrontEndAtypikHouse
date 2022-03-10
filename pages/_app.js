import React, {useEffect, useState} from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import useNavigation from "../src/hooks/useNavigation";
import 'tailwindcss/tailwind.css'
import Router from "next/router"
import Head from "next/head"
import axios from "axios"
import { AuthProvider } from '../context/AuthContext'


import NProgress from "nprogress"
import Navbar from "../src/components/core/Navbar/Navbar";
import navigationData from "../src/data/navigation";
import Tabbar from "../src/components/core/Tabbar/Tabbar";
import Footer from "../src/components/core/Footer/Footer";
import './tailwind.css';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

const queryClient = new QueryClient();

Router.onRouteChangeStart = url => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

//axios.defaults.baseURL = 'http://api.atypikhouse.test/v1';
axios.defaults.baseURL = 'https://api.f2i-cw1-ij-hc-nag.fr/v1';
if (typeof window !== 'undefined') {
    // Perform localStorage action
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token') ? localStorage.getItem('access_token') : '';
}

//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function MyApp({ Component, pageProps }) {
    
    const { currentRoute, setCurrentRoute } = useNavigation();
    const exclusionArray = [
        '/admin',
        '/admin/gestionuser',
        '/admin/gestionbiens'
      ]

      let [location, setLocation] = useState("/")

        useEffect(() => {
            setLocation(window.location.pathname)
            console.log(window.location.pathname)
        }, []);


    return (
        <>
        <div className='min-h-[100vh] flex flex-col font-body font-custom1'>
        <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
            </Head>
            {exclusionArray.indexOf(location) < 0 && 
            <Navbar
                    navigationData={navigationData}
                    currentRoute={currentRoute}
                    setCurrentRoute={setCurrentRoute}
                />}
            <Tabbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <Component {...pageProps} />
            {exclusionArray.indexOf(location) < 0 &&<Footer/>}
            <CookieConsent
              location='bottom'
              buttonText="J'accept!!"
              cookieName='myAwesomeCookieName2'
              style={{ background: '#2B373B' }}
              buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
              expires={150}
            >
              En cliquant sur "Accepter les cookies", vous acceptez le stockage
              de cookies sur votre appareil pour améliorer la navigation sur le
              site, analyser l'utilisation du site et participer à nos efforts
              de marketing. Pour plus de détails, lisez notre
              <Link href='privacypolicy'>
                <a href=''>Politique relative aux cookies.</a>
              </Link>
            </CookieConsent>
        </AuthProvider>
        </QueryClientProvider>
        </div>
        </>
    )
}

export default MyApp