import React from 'react'

export default function GlobalFilter({filter, setFilter}) {
    return (
        <div className='flex justify-end mt-32'>
            <input className="w-28 appearance-none block text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={filter || ''} onChange={(e) => setFilter(e.target.value)} placeholder='Rechercher' /> 
        </div>
    )
}
