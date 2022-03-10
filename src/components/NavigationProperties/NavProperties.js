import React, { useCallback } from "react";
import classNames from "classnames";

import styles from "./NavProperties.module.css";
import CardsProperties from "../CardsProperties/CardsProperties";

// const properties = [
//     { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$49.99', rate: 1 / 2, description: 'Football', location: "france", room: 1 },
//     { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$9.99', rate: 1 / 2, description: 'Baseball', location: "Paris", room: 6 },
//     { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$29.99', rate: 1 / 6, description: 'Basketball', location: "Paris", room: 3 },
//     { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$99.99', rate: 1 / 4, description: 'iPod Touch', location: "Paris", room: 5 },
//     { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$399.99', rate: 2 / 4, description: 'iPhone 5', location: "france", room: 6 },
//     { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$199.99', rate: 1 / 4, description: 'Nexus 7', location: "france", room: 8 }

// ];


const navPropperties = ({ navigationData, currentRoute, setCurrentRoute }) => {
    const getNavProp = useCallback((item) => {
        switch (item) {
            case "Cabanes":

                return "Cabanes";

            case "Bulles":
                return "Bulles";

            case "En Amoureux":
                return "En Amoureux";

            case "En famille":
                return "En famille";

            case "A l'aventure":
                return "A l'aventure";
        }
    }, []);

    return (
        <div>
            <div className="px-4 pt-10">
                <div class="px-4 shadow-md">
                    <div class="flex items-center font-mono border-none border-gray-100  px-2">
                        <div className="flex flex-col items-center bg-yellow-300 justify-center px-6 my-12">
                            <nav className={styles.centerbar}>
                                {navigationData.map((item, index) => (
                                    <span
                                        key={index}
                                        className={classNames([
                                            currentRoute === item 
                                        ])}
                                        onClick={() => setCurrentRoute(item)}
                                    >
                                        <span>{getNavProp(item)}</span>
                                    </span>
                                ))
                                }
                            </nav >
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default navPropperties;

/*


<div className={styles.propertiesContainer}>
                <div className={styles.centerSide}>
                    <div className={styles.centerCol}>
                        <nav className={styles.tabbar}>
                            {navigationData.map((item, index) => (
                                <span
                                    key={index}
                                    className={classNames([
                                        styles.tabItem,
                                        currentRoute === item && styles.tabItemActive,
                                    ])}
                                    onClick={() => setCurrentRoute(item)}
                                >
                                    <span>{getNavProp(item)}</span>
                                </span>
                            ))
                            }
                        </nav >

                    </div>

                </div>

            </div>


*/