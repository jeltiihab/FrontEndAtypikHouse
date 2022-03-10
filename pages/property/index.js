import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MapBox from '../../src/components/ui/Map/Map'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import AppButton from "../../src/components/ui/Buttons/Buttons"
import styles from "./property.module.css"
import selectStyle from "../../src/components/ui/FormInputs/formIputs.module.css"
import buttonStyle from "../../src/components/ui/Buttons/Buttons.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faMapMarkedAlt, faUser, faHeart, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import quartersToYears from "date-fns/quartersToYears";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Property = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const regInput = useRef();
    const router = useRouter();
    var id = router.query.id;

    const [propertyData, setPropertyData] = useState([]);
    const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
    const [endDate, setendDate] = useState(new Date());
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };

    const handleVerify = ()=>{
        let arrival = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate();
        let departure = endDate.getFullYear() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getDate();
        const nbrVoyager = regInput.current.value;
        console.log('propertyData',id);
        const dataVerify = {arrival: arrival, departure: departure, propertyId: id };
        axios.post('/reservations/check', dataVerify)
            .then( (response) => {
                const data = response.data
                if(response.status == 200 && data?.status == "affirmative") {
                    //router.push("/paimentValidation")
                    router.push({
                        pathname: '/paimentValidation',
                        query: { id: propertyData?.id, arrival: arrival, departure: departure, nbrVoyager: nbrVoyager}
                    })
                } else if (response?.data?.arrival != null) {
                    toast.error("Bonjour vérifier s'il vous plaît la saisie de votre date d'arrivée ", {theme: 'colored'});
                    return;
                } else if (response?.data?.departure != null) {
                    toast.error("Bonjour vérifier s'il vous plaît la saisie de votre date sortie ", {theme: 'colored'});
                    return;
                } else if (response?.data?.destination != null) {
                    toast.error("Bonjour vérifier s'il vous plaît la saisie de votre destination ", {theme: 'colored'});
                    return;
                } else if (response?.data?.maxTraveler != null) {
                    toast.error("Bonjour vérifier s'il vous plaît la saisie de votre nombre de voyageur ", {theme: 'colored'});
                    return;
                } else {
                    toast.error("Les dates que vous avez choisies sont déjà réservées.", {theme: 'colored'});
                    return;
                }
            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });
    }

    const getProperty = async ()  => {
        if(!router.isReady) return;
        // router.query.lang is defined
        console.log("refresh propee")
        await axios.get(`/properties/${id}`)
            .then( (response) => {
                const data = response.data;
                setPropertyData(data);
                setEquipementData(data?.category?.equipements)
            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });
    }

    useEffect(getProperty, [router])

    return (
            <div className={styles.container}>
                <div className={styles.propertyTitle}>
                    <h1>{propertyData.name}</h1>
                </div>
                <div className={styles.infoBar}>
                    <div>
                        <div className={styles.infoBarLeftSide}>
                            <div className={styles.infoBarItems}><label>3/5</label></div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faMapMarkedAlt} /><label>{propertyData.address?.city}</label></div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faUser} /><label>{propertyData.user?.firstName} {propertyData.user?.lastName}</label></div>
                        </div>
                    </div>
                    <div className={styles.infoBarRightSide}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faHeart} /></div>
                </div>
                <div className={styles.galleryContainer}>
                    {(propertyData?.images != undefined && propertyData?.images != null)?
                        <>
                        <Carousel responsive={responsive} ssr={true}>
                            <img className={styles.propertyPictures} src={"http://api.f2i-cw1-ij-hc-nag.fr/uploads/"+JSON.parse(propertyData?.images)?.img0}/>
                            <img className={styles.propertyPictures} src={"http://api.f2i-cw1-ij-hc-nag.fr/uploads/"+JSON.parse(propertyData?.images)?.img1}/>
                            <img className={styles.propertyPictures} src={"http://api.f2i-cw1-ij-hc-nag.fr/uploads/"+JSON.parse(propertyData?.images)?.img2}/>
                            <img className={styles.propertyPictures} src={"http://api.f2i-cw1-ij-hc-nag.fr/uploads/"+JSON.parse(propertyData?.images)?.img3}/>
                            <img className={styles.propertyPictures} src={"http://api.f2i-cw1-ij-hc-nag.fr/uploads/"+JSON.parse(propertyData?.images)?.img4}/>
                        </Carousel>
                        </>
                        :
                        <></>}

                </div>
                <div className={styles.tenantInfos}>
                    <h2>Cabane loué par <span>{propertyData.user?.firstName} {propertyData.user?.lastName}</span></h2>
                    <FontAwesomeIcon className={styles.infoBarIcons} icon={faUser} />
                </div>
                <hr/>
                <div className={styles.descriptionAndReservationBlock}>
                    <div className={styles.propertyDescription}>
                        <h3>Description</h3>
                        <p>{propertyData.description}</p>
                        <div className={styles.equipementsImagesContainer}>
                            <div className={styles.equipementTitle}>
                                <h3 className="font-semibold mb-2">Equipements : </h3>
                            </div>
                            <div className="">
                                <div className="">
                                    {(propertyData?.equipments != null)?(
                                        Object.entries(JSON.parse(propertyData?.equipments)).map(([k,v]) => {
                                            return (
                                                <div className="grid grid-cols-2 gap-my-10 mb-3 ml-6" key={k}>
                                                    <label> • {k} </label>
                                                    <label>
                                                        <FontAwesomeIcon
                                                            className={(v==="1")?"text-green-800 w-6 mx-6":"text-red-800 w-6 mx-6"}
                                                            size='xs'
                                                            icon={(v==="1")?faCheck:faTimes}
                                                        />
                                                    </label>
                                                </div>
                                            );
                                        })
                                    ):(
                                        <div></div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={styles.equipementsImagesContainer}>
                            <div className={styles.equipementTitle}>
                                <h3 className="font-semibold mb-2">Propriétés dynamique : </h3>
                            </div>
                            <div className="">
                                <div>
                                    {(propertyData?.dynamic_attributes != null)?(
                                        Object.entries(JSON.parse(propertyData?.dynamic_attributes)).map(([k,v]) => {
                                            return (
                                                <>
                                                    { (v !== "1" && v !== "0") ?
                                                        <>
                                                            <div className="grid grid-cols-2 gap-my-10 mb-3 ml-6" key={k}>
                                                                <label className="mt-2"> • {k}</label>
                                                                <label>
                                                                    <input
                                                                        type='text'
                                                                        className=' w-auto focus:outline-none focus:text-gray-600 p-2 text-center'
                                                                        value={v}
                                                                        disabled
                                                                    />
                                                                </label>
                                                            </div>
                                                        </>
                                                        :( v === "1" ?
                                                            <>
                                                                <div className="grid grid-cols-2 gap-my-10 mb-3 ml-6 ">
                                                                    <label> • {k}</label>
                                                                    <label>
                                                                        <FontAwesomeIcon
                                                                            className='text-green-800 w-6 mx-6'
                                                                            size='xs'
                                                                            icon={faCheck}
                                                                        />
                                                                    </label>
                                                                </div>
                                                            </>
                                                            : <>
                                                                <div className="grid grid-cols-2 gap-my-10 mb-3 ml-6">
                                                                    <label> • {k}</label>
                                                                    <label>
                                                                        <FontAwesomeIcon
                                                                            className='text-red-800 w-6 mx-6'
                                                                            size='xs'
                                                                            icon={faTimes}
                                                                        />
                                                                    </label>
                                                                </div>
                                                            </>)
                                                    }
                                                </>
                                            );
                                        })
                                    ):(
                                        <div></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.reservationForm}>
                        <div className='flex gap-6'>
                            <label>Nombre de voyageurs</label>
                            <select className={selectStyle.flatInput} name="nbrVoyager" ref={regInput}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                        <h4>Vérifier vos disponibilités et les prix</h4>
                        <div>
                            <DateRange
                            ranges={[selectionRange]}
                            minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                            rangeColors={["#C64756"]}
                            onChange={handleSelect}
                            retainEndDateOnFirstSelection={false}
                            moveRangeOnFirstSelection={false}
                            />
                            <div className={styles.buttonDiv}>
                                <AppButton styleparam={buttonStyle.redLgButton} onClick={handleVerify} Content="Réserver" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>
                    <div className={styles.mapStyle}>
                        <h3>Carte</h3>
                        <MapBox/>
                    </div>
                    <ToastContainer />

            </div>
    );
};

export default Property;