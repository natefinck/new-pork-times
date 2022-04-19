import React, { useState, useEffect } from 'react';
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import logo from '../images/logo.png'
import SideNavPanel from './sideNavPanel'
import Hamburger from '../components/hamburgerMenu'
import onClickOutside from "react-onclickoutside";
import Link from 'next/link'
import { useRouter } from "next/router";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [home, setHome] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    Header.handleClickOutside = () => {
        setMenuOpen(false);
    };

    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url) => {
        if (url === '/') setHome(true)
        else setHome(false);
      }
      router.events.on('routeChangeStart', handleRouteChange)
      return () => {
        router.events.off('routeChangeStart', handleRouteChange)
      }
    }, [])

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
    {'displayText': 'Obituaries', 'href': '/'}
]

    return (
        <>
            <div className={styles.headerContainer}>
                <div className={`${styles.header} header`}>
                    <Link href="/">
                        <div className={`${styles.logoContainer} logoContainer`}>
                            <Image
                                alt="The New Pork Times Logo"
                                src={logo}>
                            </Image>
                        </div>
                    </Link>
                    <div className={`${styles.navContainer} navContainer`} onClick={() => setMenuOpen(false)}>
                        <SideNavPanel navLinks={navLinks}/>
                    </div>
                    <div
                    className={styles.hamburger}
                    onClick={() => {
                            toggleMenu(true)
                    }}>
                        <Hamburger menuopen={menuOpen}/>
                    </div>
                    {/* <div className={`${styles.bottomBar} bottomBar`}>
                        <ul>
                            {navLinks.map((l, i) => 
                                <li key={l.displayText}>
                                    <Link href={l.href}>
                                        <a>{l.displayText}</a>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div> */}
                </div>
                <div className={`${styles.bottomNavBorder} bottomNavBorder`} />
            </div>
            <style jsx>{`
                .navContainer {
                    box-shadow: ${menuOpen ? '0px 0px 16px 2px black' : '0px 0px 0px 0px black'};
                    transform: ${menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
                    transition: ${menuOpen ? 'all .3s cubic-bezier(0, 0.65, 0.58, 1)' : 'all .25s cubic-bezier(0.68, -0.06, 0.48, 0.99)'};
                }

                .header {
                    padding-bottom: ${home ? 'intial' : '.3rem'}
                }

                .logoContainer {
                    width: ${home ? '40%' : '30%'};
                }

                .bottomBar {
                    height: ${home ? '40px' : '0px'};
                }

                .bottomNavBorder {
                    opacity: ${home ? '1' : '0'};
                    height: ${home ? '4px' : '0px'}
                    // border-top: ${home ? '1px solid var(--main-black)' : 0};
                    // border-bottom: ${home ? '1px solid var(--main-black)' : 0};
                }

                @media only screen and (max-width: 767px) {
                    .logoContainer {
                        width: ${home ? '60%' : '50%'};
                    }
                }
            `}</style>
        </>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Header.handleClickOutside,
  };

export default onClickOutside(Header, clickOutsideConfig);