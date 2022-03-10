import React from "react";
import classNames from "classnames";
import Image from "next/image"
import styles from "./Navbar.module.css";
import Link from 'next/link'
import ButtonStyle from '../../ui/Buttons/Buttons.module.css'
import Logo from '../../../../public/images/logo.png'
import DropDown from "../../ui/DropDown/DropDown"

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
            <Link href="/">
                <a>
                <Image src={Logo} layout="fill" objectFit="contain"/>
                </a>
            </Link>
            </div>
            <ul className={styles.navItems}>
                {navigationData.map((item, index) => (
                    <li
                        className={classNames([
                            styles.navItem,
                            currentRoute === item && styles.selectedNavItem,
                        ])}
                        key={index}
                        onClick={() => setCurrentRoute(item.name)}
                    >
                        <Link href={item.linkParent}>
                            <a>
                                {item.name}
                            </a>
                        </Link>

                    </li>
                ))}
            </ul>
            <Link href="/register">
            <button className={styles.redWideButton}>
                Devenir propriétaire
            </button>
            </Link>
            <div>
                <DropDown/>
            </div>
        </nav>
    );
};

export default Navbar;