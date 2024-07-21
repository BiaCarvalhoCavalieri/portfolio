"use client";
import { useEffect, useState } from "react";
import styles from "./menu.module.css";

export default function Menu() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 1024);
    };

    useEffect(() => {
        updateMedia()
        window.addEventListener('resize', updateMedia)
        return () => window.removeEventListener('resize', updateMedia)
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`${styles.menu} d-flex justify-center container w-100`}>
            {isDesktop ? (
                <>
                    <a className={`${styles.menuItem} ${styles.menuItemHome} d-flex align-center`} href="/">Home</a>
                    <a className={styles.menuItem} href="#aboutMe">About Me</a>
                    <a className={styles.menuItem} href="#projects">Projects</a>
                    <a className={styles.menuItem} href="#skills">Skills</a>
                    <a className={styles.menuItem} href="#contact">Contact</a>
                </>
            ) : (
                <>
                    <button className={styles.menuHamburger} onClick={toggleMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0,0,256,256"
                            width="50px"
                            height="50px"
                        >
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                <g transform="scale(5.12,5.12)">
                                    <path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </button>
                    {menuOpen && (
                        <button className={styles.menuMobile} onClick={() => { setMenuOpen(false) }}>
                            <a className={`${styles.menuItem} ${styles.menuItemHome} d-flex align-center`} href="/">Home</a>
                            <a className={styles.menuItem} href="#aboutMe">About Me</a>
                            <a className={styles.menuItem} href="#projects">Projects</a>
                            <a className={styles.menuItem} href="#skills">Skills</a>
                            <a className={styles.menuItem} href="#contact">Contact</a>
                        </button>
                    )}
                </>
            )}
        </nav>
    );
}
