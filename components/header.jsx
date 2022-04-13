import React, { useState, useEffect } from 'react';
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import logo from '../images/logo.png'
import Link from 'next/link'
import Hamburger from './hamburgerMenu'

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
      console.log(menuOpen);
    }, [menuOpen]);

    const navLinks = [
        {'displayText': 'Home', 'href': '/'},
        {'displayText': 'World', 'href': '/'},
        {'displayText': 'Business', 'href': '/'},
        {'displayText': 'Politics', 'href': '/'},
        {'displayText': 'U.S.', 'href': '/'},
        {'displayText': 'Sports', 'href': '/'},
        {'displayText': 'Health', 'href': '/'},
        {'displayText': 'N.Y.', 'href': '/'},
        {'displayText': 'Opinion', 'href': '/'},
        {'displayText': 'Tech', 'href': '/'},
        {'displayText': 'Science', 'href': '/'},
        {'displayText': 'Art', 'href': '/'},
        {'displayText': 'Books', 'href': '/'},
        {'displayText': 'Style', 'href': '/'},
        {'displayText': 'Food', 'href': '/'},
        {'displayText': 'Travel', 'href': '/'},
        {'displayText': 'Magazine', 'href': '/'},
        {'displayText': 'Real Estate', 'href': '/'},
        {'displayText': 'Obituaries', 'href': '/'},
        {'displayText': 'Video', 'href': '/'}
    ]

    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.logoContainer}>
                    <Image
                        alt="The New Pork Times Logo"
                        src={logo}>
                    </Image>
                </div>
                <div className={`${styles.navContainer} navContainer`}>
                    <ul>
                        {navLinks.map((l) => 
                            <li><Link href={l.href}><a>{l.displayText}</a></Link></li>
                        )}
                    </ul>
                </div>
                <div className={styles.hamburger} onClick={() => toggleMenu()}>
                    <Hamburger />
                </div>
            </div>

            <style jsx>{`
                .navContainer {
                    box-shadow: ${menuOpen ? '0px 0px 16px 2px black' : '0px 0px 0px 0px black'};
                    transform: ${menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
                    transition: ${menuOpen ? 'all .3s cubic-bezier(0, 0.65, 0.58, 1)' : 'all .25s cubic-bezier(0.68, -0.06, 0.48, 0.99)'};
                }
            `}</style>
        </>
    )
}