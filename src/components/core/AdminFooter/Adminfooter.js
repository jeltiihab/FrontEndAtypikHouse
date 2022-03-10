import React from 'react'

export default function Adminfooter() {
    return (

        <>
            <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
                <ul className="flex items-center flex-wrap mb-6 md:mb-0">
                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Termes et conditions</a></li>
                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Politique de confidentialité</a></li>
                </ul>
            </footer>
            <p className="text-center text-sm text-gray-500 my-10">&copy; 2021-{(new Date().getFullYear())} <a href="#" className="hover:underline" target="_blank">AtypikHouse</a>. Tous les droits sont réservés.</p>
        </>
    )
}
