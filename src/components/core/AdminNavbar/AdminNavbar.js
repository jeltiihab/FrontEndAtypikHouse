import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/images/logo.png'
import DropDown from "../../ui/DropDown/DropDown"
import Link from 'next/link'

export default function AdminNavbar() {
    return (
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                <Link href="/admin">
                    <a className="text-xl font-bold flex items-center lg:ml-2.5">
                        <Image src={logo} height={40} width={190}/>
                    </a>
                </Link>
                </div>
                <div className="flex items-center">
                <div className="lg:flex items-center">
                <DropDown style={{padding: 0}}/>
                </div>
                </div>
            </div>
        </div>
    </nav>
    )
}
