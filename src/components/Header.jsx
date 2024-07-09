import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, navLinks } from "../utils/constants";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Header = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
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
        <nav className={`${styles.paddingX}w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                        <img src={ LOGO_URL } alt="Logo" className="w-9 h-9 object-contain"/>
                        <p className="text-white size-48 font-bold cursor-pointer flex">Sai Jaswanth</p>
                </Link>
                
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {
                        navLinks.map((navLink) => (
                            <li key={navLink.id} className={`${active === navLink.title ? "text-white" : "text-slate-400"} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(navLink.title)}>
                                <a href={`#${navLink.id}`}>{navLink.title}</a> 
                            </li>
                    ))}
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="Menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)} />

                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {
                                navLinks.map((navLink) => (
                                    <li key={navLink.id} className={`font-poppins font-medium cursor-pointertext-[16px] ${
                                        active === navLink.title ? "text-white" : "text-secondary"
                                    }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(navLink.title);
                                    }}>
                                        <a href={`#${navLink.id}`}>{navLink.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;