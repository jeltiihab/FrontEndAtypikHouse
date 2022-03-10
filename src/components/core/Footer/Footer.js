import React from "react";
import Image from "next/image"
import styles from "./Footer.module.css";
import AppButton from "../../ui/Buttons/Buttons";
import buttonStyle from "../../ui/Buttons/Buttons.module.css";
import miniLogo from '../../../../public/images/min-logo.png'
import ButtonStyle from '../../ui/Buttons/Buttons.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerContainer}>
                <div className={styles.Description}>
                    <div className={styles.footerLogo}>
                        <Image src={miniLogo} width={50} height={50} objectFit="fill"/>
                    </div>
                    <div className={styles.footerDescription}>
                        Pour toutes les personnes partageant la même passion d'aimer la nature et les voyages. Que vous soyez propriétaire d'un hébergement insolite ou locataire, c'est l'endroit idéal pour commencer une nouvelle aventure.
                    </div>
                </div>
                <div className={styles.Menudiv}>
                    <div>
                        <h3 className={styles.h3Titles}>À propos</h3>
                        <h4>AtypikHouse</h4>
                        <h4>Partenariat</h4>
                    </div>
                    <div>
                        <h3 className={styles.h3Titles}>Nos biens</h3>
                        <h4>Destinations</h4>
                        <h4>Catégories</h4>
                        <h4>Coup de coeur</h4>
                    </div>
                    <div>
                        <h3 className={styles.h3Titles}>Assistance</h3>
                        <h4>Nous contacter</h4>
                        <h4>FAQ</h4>
                    </div>
                    <div>
                        <h3 className={styles.h3Titles}>Nous suivre</h3>
                        <div className={styles.socialMediaIconsDiv}>
                            <FontAwesomeIcon className={styles.SocialIcons} size="xs" icon={faFacebook} />
                            <FontAwesomeIcon className={styles.SocialIcons} size="xs" icon={faInstagram} />
                        </div>
                    </div>
                </div>
                <div className={styles.NewsLetterDiv}>
                    <h3>NewsLetter</h3>
                    <div className="mb-6">
                        <input className={styles.formInputs} id="email" type="email" placeholder="Email" />
                    </div>
                    <button className={ButtonStyle.greenMdButton} type="button">
                        S'inscrire
                    </button>
                </div>

            </div>
            <div className={styles.copyrightDiv}>
            <p>Copyright AtypikHouse 2021</p>
            </div>
        </div>

    );
};

export default Footer;