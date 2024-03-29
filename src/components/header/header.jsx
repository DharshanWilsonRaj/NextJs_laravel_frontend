import Link from 'next/link'
import React from 'react'
import Clock from '../clock/Clock'

const Header = () => {
    return (
        <div>

            <header className="bg-gray-50  dark:bg-gray-800">

                <div className="  px-4 py-3 sm:px-6 lg:px-4">
                    <div className="flex items-center  gap-4">
                        <h6 className='px-3 text-white font-bold text-3xl'>LoGo</h6>

                        <div className=' ms-auto flex items-center gap-3'>
                            <span>
                                <Clock />
                            </span>
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <label className="sr-only" htmlFor="search"> Search </label>

                                    <input
                                        className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                                        id="search"
                                        type="search"
                                        placeholder="Search..."
                                    />

                                    <button
                                        type="button"
                                        className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                                    >
                                        <span className="sr-only">Search</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <Link
                                    href="/"
                                    className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                                >
                                    <span className="sr-only">Notifications</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            <span aria-hidden="true" className="block h-6 w-px rounded-full bg-gray-200"></span>


                            <Link href="/" className="block shrink-0">
                                <span className="sr-only">Profile</span>
                                <img
                                    alt="Man"
                                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            </Link>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
