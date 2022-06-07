import React from 'react'
import { PencilAltIcon } from '@heroicons/react/outline'

export default function Modal() {

    return (
        <>
            <div className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Edit</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Duplicate</a>
                </div>
                <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Archive</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Move</a>
                </div>
                <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Share</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Add to favorites</a>
                </div>
                <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Delete</a>
                </div>
            </div >
        </>
    )
}
