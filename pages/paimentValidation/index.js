import React, {useRef, useState, useEffect, useContext} from "react";
import styles from './paimentValidation.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faMapMarkedAlt, faStarHalfAlt, faUser, paypal} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../src/components/core/Navbar/Navbar";
import navigationData from "../../src/data/navigation";
import Tabbar from "../../src/components/core/Tabbar/Tabbar";
import useNavigation from "../../src/hooks/useNavigation";
import AppButton from "../../src/components/ui/Buttons/Buttons"
import buttonStyle from "../../src/components/ui/Buttons/Buttons.module.css";
import PropertyImage from '../../public/images/galerie1.jpg'
import PaypalIcon from '../../public/icons/paypal.png'
import VisaIcon from '../../public/icons/visa.png'
import MasterCardIcon from '../../public/icons/maestro.png'
import { useRouter } from "next/router";
import axios from "axios";
import LoadingOverlay from 'react-loading-overlay';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import FullPageLoader from "../../src/components/ui/Spinner/FullPageLoader";
import AuthContext from "../../context/AuthContext";

const paimentValidation = function() {


    const router = useRouter();
    let {isAuthenticated, user, logoutUser, isLoading} = useContext(AuthContext)
    const id = router.query.id;
    const arrival = router.query.arrival;
    const departure = router.query.departure;
    const nbrVoyager = router.query.nbrVoyager;
const [isloading , setisloading] = useState(true);
const [orderUrl , setorderUrl] = useState("");
const [confirmUrl , setconfirmUrl] = useState("");
    const { currentRoute, setCurrentRoute } = useNavigation();
    const [propertyData, setPropertyData] = useState([]);

	

    const dataVerify = {arrival: arrival, departure: departure, propertyId: id};
    const getProperty = async ()  => {
	
        var response = await  axios.post(`/reservations/check`, dataVerify) ;
		console.log('response.data',response.data);
		setorderUrl(response.data.orderUrl);
		setPropertyData(response.data) ;
		setisloading(false)
            
        }

    useEffect(getProperty, [isAuthenticated, isLoading])

    if (isLoading || !isAuthenticated) {
        return <FullPageLoader />;
    }

function getOrder() {
				 console.log("order url",orderUrl) ;
                                var ddata = {arrival: arrival, departure: departure, propertyId: id, hosting_capacity: nbrVoyager};
								console.log('ddata',ddata) ;
                                return fetch (orderUrl,{
                                    method : "POST",
                                    body : JSON.stringify(ddata),
									 headers: {
                        'content-type': 'application/json',
                       
                        'Accept' : 'application/json',
                        'Authorization' : localStorage.getItem('access_token') ? localStorage.getItem('access_token') : ''
                    }


                                }).then(function(res) {
                                    return res.json();
                                }).then(function (data){
									localStorage.getItem('data',data)
                                    setconfirmUrl( data.confirmUrl);
                                    return data.orderID;
                                })

}
    return (
<LoadingOverlay
  active={orderUrl == ""}
  spinner
  text='Loading ...'
  >
        <div className={styles.container}>
            <div className={styles.validatePaimentcontainer}>
                <div className={styles.leftRightSide}>
                    <h2 className={styles.titles}>Demande de réservation</h2>
                    <div className={styles.propertyInfos}>
                        <div><Image className={styles.propertyPictures} src={PropertyImage} width={150} height={150}/> </div>
                        <div>
                            <div>{propertyData?.property?.name}</div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarStarIcon} size="xs" icon={faStarHalfAlt} /> <label>3/5</label></div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faMapMarkedAlt} /><label>{propertyData?.property?.address?.city}</label></div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faUser} /><label>{propertyData?.property?.user?.firstName} {propertyData?.property?.user?.lastName}</label></div>
                        </div>
                        <div><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faHeart} /></div>
                    </div>
                    <h2>Votre voyage</h2>
                    <div>
                        <h4>Dates</h4>
                        <div className={styles.reservationInfos}>
                            <div>
                                <p><label>{arrival}</label> - <label>{departure}</label></p>
                            </div>
                            <div className={styles.actionLink}>
                                <a href="#">Modifier</a>
                            </div>
                        </div>
                        <h4>Voyageurs</h4>
                        <div className={styles.reservationInfos}>
                            <div>
                                <p><label>{nbrVoyager} Adultes</label></p>
                            </div>
                            <div className={styles.actionLink}>
                                <a href="#">Modifier</a>
                            </div>
                        </div>
                        <h4>Prix</h4>
                        <div className={styles.reservationInfos}>
                            <div>
                                <p><label>{propertyData?.property?.price}</label> x <label>{propertyData?.days}</label>Nuits</p>
                            </div>
                            <div className={styles.actionLink}>
                                <a href="#">{ propertyData?.property?.price * propertyData?.days } Euro</a>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.reservationInfos}>
                            <div>
                                <p><label>Total</label></p>
                            </div>
                            <div className={styles.actionLink}>
                                <a href="#">{ propertyData?.property?.price * propertyData?.days } Euro</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.leftRightSide}>

                    <h2 className={styles.titles}>Payer avec</h2>
			{ orderUrl != ""?(
                    <PayPalScriptProvider options={{ "client-id":  "AYz2CwrBi8Tu5wdVqsd9IIs3ZdfN0C7cIkA0gczx_AquHaVQQIQJT2M4Neghd04Kje2At62p2ked1-Bu", currency: "EUR", commit:true}}>
                        <PayPalButtons
                            createOrder={getOrder} 
                            onApprove={() => {
                                return fetch(confirmUrl,{
                                    headers: {
                                        'content-type': 'application/json',
                                        'Accept' : 'application/json',
                                        'Authorization' : localStorage.getItem('access_token') ? localStorage.getItem('access_token') : ''
                                    }
                                }).then(function (res) {
                                    return res.json()
                                }).then(function (data) {
                                    router.push("paymentsuccess")
                                })
                            }}
                        />
                    </PayPalScriptProvider> ) :(<br/>) }


                </div>
            </div>

        </div>

</LoadingOverlay>
    );
};

export default paimentValidation;