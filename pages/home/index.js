import React, { useRef, useState, useEffect } from "react";
import styles from './home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AppButton from '../../src/components/ui/Buttons/Buttons'
import buttonStyle from '../../src/components/ui/Buttons/Buttons.module.css'
import PropertyCard from "../../src/components/ui/Cards/Card";
import Typewriter from 'typewriter-effect';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faSearch} from "@fortawesome/free-solid-svg-icons";
import BannerImage from '../../public/images/banner.jpg'
import JoinUsImage from '../../public/images/joinus.jpg'
import SmallCard from '../../src/components/core/SmallCards/SmallCards'
import axios from "axios";
import SmallCardsData from "../../src/data/smallCards"
import { useRouter } from "next/router";
import SearchBar from "../../src/components/core/SearchBar/SearchBar"


const Home = () => {

    const [cards, setCards] = useState([]);
    const router = useRouter();

    // Getting data for the three cards in the home page ( 3 Only )    
    const getCardsData = ()  => {
        axios.get('/properties/three-last')
            .then( (response) => {
                const cardsData = response.data
                setCards(cardsData);
                //console.log(cardsData);
            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });
    }
    useEffect(getCardsData, []);

    return (
        <div className={styles.homeContainer}>
                <div className={styles.banner}>
                    <Image src={BannerImage} layout="fill" objectFit="fill" loading="eager"/>
                    <div className={styles.bannerTitles}>
                        <Typewriter   options={{
                            strings: ['<span style="color: indianred">ATYPIK</span> HOUSE', 'Trouvez votre prochain <span style="color: darkgreen">séjour</span> dans plus de <span style="color: indianred">460 biens !</span>'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>

                    <div className={styles.SerachBar}>
                        <input id="search" type="text" placeholder="Lancer votre recherche"/>
                        <FontAwesomeIcon className={styles.searchIcon} size="xs" icon={faSearch} />
                    </div>
                    <div className={styles.bannerMiddleBtns}>
                        <Link href="/search">
                            <a>
                                <AppButton Content="Reserver Maintenant !" styleparam={buttonStyle.redSquareButton} />
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a>
                                <AppButton Content="Contactez nous" styleparam={buttonStyle.redSquareButton} />
                            </a>
                        </Link>
                    </div>
                    <SearchBar />
                </div>
            <div className={styles.ourOffres}>
                <div className={styles.ourOffresTitle}>
                    <h1 className={styles.Titles}>Nos offres du moments</h1>
                </div>
                <div className={styles.cardsDiv}>
                    <PropertyCard propertyData={cards}/>
                </div>
            </div>
            <div className={styles.ourOffresTitle}>
                <h1 className={styles.Titles}>Nous rejoindre <FontAwesomeIcon className={styles.heartIcon} size="xs" icon={faHeart} /></h1>
                <div className={styles.joinUsContainer}>
                    <Image src={JoinUsImage} layout="fill" objectFit="fill"/>
                    <div className={styles.layerDiv}></div>
                    <div className={styles.label}>
                        <Typewriter   options={{
                            strings: ['<span style="color: indianred">ATYPIK</span> HOUSE', 'TOUCHEZ VOS RÊVES'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        <p>Venez nous rejoindre dans cette experience pour devenir un hôte Atypik et béneficiez de revenue supplémentaire</p>
                        <button className={buttonStyle.redLgButton}>
                            Devenir partenaire
                        </button>
                    </div>
                </div>
            </div>
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
            <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5">Explorer à proximité</h2>
                {/* Pull the data from the server - static rendering for the front page */}
                <div  className={styles.smallcardsContainer}>
                    {SmallCardsData?.map((item, i) => (
                    <Link href={{ pathname: '/searchpage', query: { location: item.location } }} key={item.i}>
                        <div key={item.i}>
                                <SmallCard
                                    key={item.location}
                                    img={item.img}
                                    distance={item.distance}
                                    location={item.location}
                                />
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
            </main>
                <div className={styles.testimonialDiv}>
                    <div className={styles.testimonialContainer}>
                        <div className="w-full max-w-6xl mx-auto">
                            <div className="text-center max-w-xl mx-auto">
                                <h1 className={styles.Titles}>Ce que les gens disent. <br/> de notre site Web.</h1>
                                <div className="text-center mb-10">
                                    <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                                    <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                                    <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                                    <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                                    <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex items-start">
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie
                                                    Edgar.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione
                                                dolor exercitationem minima quas itaque saepe quasi architecto vel!
                                                Accusantium, vero sint recusandae cum tempora nemo commodi soluta
                                                deleniti.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Stevie
                                                    Tifft.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod
                                                necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint
                                                quam tempora vel.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Tommie
                                                    Ewart.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati
                                                ullam excepturi dicta error deleniti sequi.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Charlie
                                                    Howse.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore
                                                voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos
                                                neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem!
                                                Culpa, iusto.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Nevada
                                                    Herbertson.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem
                                                porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere
                                                exercitationem pariatur deserunt tempora molestiae assumenda nesciunt
                                                alias eius? Illo, autem!<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Kris
                                                    Stanton.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto,
                                                explicabo, cupiditate quas totam!<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    );
};

export default Home;