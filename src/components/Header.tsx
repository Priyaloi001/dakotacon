import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { useLocation } from 'react-router-dom'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation()
    
    const { pathname } = useLocation();
    // scroll to page top when visiting
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const isHomePage = location.pathname === '/'
    // for sticky haeder
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className={`fixed w-full z-50 px-5 xl:px-0 transition-all duration-300 ${scrolled || !isHomePage ? "bg-sky-950 shadow-md" : "bg-transparent"
            }`}>
            <div className="container mx-auto py-3 lg:py-7 flex justify-between">
                {/* logo */}
                <div>
                    <img src="/assets/images/header-logo.png" alt="logo" className="w-16 h-16 object-contain" />
                </div>
                {/* Hamburger for Mobile */}
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="rgba(255,255,255,1)"><path d="M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z"></path></svg>
                </button>
                {/* Offcanvas Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="p-4 flex justify-between items-center border-b">
                        <h2 className="font-primary text-lg font-semibold">Menu</h2>
                        <button onClick={() => setIsOpen(false)} aria-label="Close Menu" className="font-semibold">
                            X
                        </button>
                    </div>

                    <ul className="flex flex-col border-1 border-white rounded-full mt-5">
                        <NavLink to="" onClick={() => setIsOpen(false)} className={({ isActive }) =>
                            `capitalize text-black cursor-pointer text-sm xl:text-base font-primary duration-200
     ${isActive ? "bg-[#ffffff63]  py-2 px-5 rounded-md" : "hover:bg-[#ffffff63] py-2 px-5 hover:rounded-md"}`
                        } >
                            home
                        </NavLink>

                        <HashLink smooth to="/#schedule" onClick={() => setIsOpen(false)} scroll={(el) => {
                            const yOffset = -100; // adjust this based on your header height
                            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                        }} className="capitalize text-black cursor-pointer text-sm xl:text-base font-primary hover:bg-[#ffffff63] not-first:py-2 px-5 hover:rounded-md duration-200">
                            Schedule
                        </HashLink>

                        <NavLink to="/speakers" onClick={() => setIsOpen(false)} className={({ isActive }) =>
                            `capitalize text-black cursor-pointer text-sm xl:text-base font-primary duration-200
     ${isActive ? "bg-black text-white  py-2 px-5 rounded-md" : "hover:bg-black hover:text-white  py-2 px-5 hover:rounded-md"}`
                        }>
                            Speakers
                        </NavLink>
                        <li className="capitalize text-black cursor-pointer text-sm xl:text-base font-primary hover:bg-[#ffffff63]  py-2 px-5 hover:rounded-md duration-200">
                            Trainings
                        </li>
                        <li className="capitalize text-black cursor-pointer text-sm xl:text-base font-primary hover:bg-[#ffffff63]  py-2 px-5 hover:rounded-md duration-200">
                            Sponsors
                        </li>
                    </ul>
                </div>

                {/* Optional Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}
                {/* navigation */}
                <div className="text-white my-auto hidden lg:block">
                    <ul className="flex gap-4 xl:gap-6 border-1 border-white rounded-full py-3 px-7">
                        <NavLink to="" className={({ isActive }) =>
                            `capitalize text-white cursor-pointer text-sm xl:text-base font-primary duration-200
     ${isActive ? "bg-[#ffffff63] p-2 rounded-md" : "hover:bg-[#ffffff63] p-2 hover:rounded-md"}`
                        }>
                            home
                        </NavLink>
                        <HashLink smooth to="/#schedule" scroll={(el) => {
                            const yOffset = -100; // adjust this based on your header height
                            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                        }} className="capitalize text-white cursor-pointer text-sm xl:text-base font-primary hover:bg-[#ffffff63] p-2 hover:rounded-md duration-200">
                            Schedule
                        </HashLink>
                        <NavLink to="/speakers" className={({ isActive }) =>
                            `capitalize text-white cursor-pointer text-sm xl:text-base font-primary duration-200
     ${isActive ? "bg-[#ffffff63] p-2 rounded-md" : "hover:bg-[#ffffff63] p-2 hover:rounded-md"}`
                        }>
                            Speakers
                        </NavLink>
                        <li className="capitalize text-white cursor-pointer text-sm xl:text-base font-primary hover:bg-[#ffffff63] p-2 hover:rounded-md duration-200">
                            Trainings
                        </li>
                        <li className="capitalize text-white cursor-pointer text-sm xl:text-base font-primary hover:bg-[#ffffff63] p-2 hover:rounded-md duration-200">
                            Sponsors
                        </li>
                    </ul>
                </div>
                {/* button */}
                <div className="my-auto hidden lg:block">
                  <NavLink to="/register" className="font-primary capitalize text-black bg-white py-3 px-10 rounded-md  border-1 border-white  text-sm xl:text-base hover:bg-transparent hover:text-white duration-200">
                        register
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
