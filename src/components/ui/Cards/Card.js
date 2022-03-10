import React from "react";
import Image from "next/image"
import styles from "./Card.module.css";
import AppButton from "../Buttons/Buttons";
import buttonStyle from "../Buttons/Buttons.module.css";
import PropertyImage from '../../../../public/images/property1.jpg'
import Link from 'next/link'

const PropertyCard = (props) => {
    return (
            <>
                {props.propertyData?.map((data, i) => {
                    return (
                        <Link href={{ pathname: 'property', query: { id: data.id } }}>
                        <div className={styles.cardContainer} key={i}>
                            <div className={styles.imageContainer}>
                                {(data?.images != undefined && data?.images != null)?
                                    <>
                                        <a href="#">
                                            <Image className="rounded-t-lg" src={"http://api.f2i-cw1-ij-hc-nag.fr/uploads/"+JSON.parse(data?.images)?.img0} layout="fill" objectFit="fill"/>
                                        </a>
                                    </>:
                                    <></>}

                            </div>
                            <div className={styles.cardContent}>
                                <a href="#">
                                    <h5 className={styles.propertyTitle}>{data.title}</h5>
                                </a>
                                <p className={styles.propertyLocation}>{data.address?.city}</p>
                                <p className={styles.propertyLocation}>{data.price} euro/nuit</p>
                                <AppButton Content="Reserver" styleparam={buttonStyle.redMeduimButton} />
                            </div>
                        </div>
                        </Link>
                    )
                })}
            </>

    );
};

export default PropertyCard;