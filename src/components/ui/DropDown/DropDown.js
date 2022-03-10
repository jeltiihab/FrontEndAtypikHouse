import React, {useContext} from "react";
import { Menu, Transition } from "@headlessui/react";
import styles from "./dropDown.module.css"
import {MenuIcon, UserCircleIcon} from "@heroicons/react/solid";
import Link from 'next/link'
import AuthContext from '../../../../context/AuthContext'

export default function DropDown() {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div className={styles.dropDownContainer}>
            <div className={styles.menu}>
                <Menu>
                    {({ open }) => (
                        <>
              <span className="rounded-md shadow-sm">
                <Menu.Button className={styles.menuButton}>
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </Menu.Button>
              </span>
                            <Transition
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items static className={styles.menuItems}>
                                    {
                                        user ? (
                                            <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <>
                                                <Link href="/profil">
                                                    <a
                                                        className={
                                                            active
                                                                ? styles.menuItemActive
                                                                : styles.menuItemNonActive
                                                        }
                                                    >
                                                        Profile
                                                    </a>
                                                </Link>
                                                    <a onClick={logoutUser}
                                                        className={
                                                            active
                                                                ? styles.menuItemActive
                                                                : styles.menuItemNonActive
                                                        }
                                                    >
                                                        Logout
                                                    </a>
                                                </>
                                            )}
                                        </Menu.Item>
                                            </div>
                                        ): (
                                            <div>
                                            <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/login">
                                                    <a
                                                        className={
                                                            active
                                                                ? styles.menuItemActive
                                                                : styles.menuItemNonActive
                                                        }
                                                    >
                                                        Se connecter
                                                    </a>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href="/register">
                                                    <a
                                                        className={
                                                            active
                                                                ? styles.menuItemActive
                                                                : styles.menuItemNonActive
                                                        }
                                                    >
                                                        Inscription
                                                    </a>
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </div>
                                            </div>
                                        )
                                    }
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    )
}