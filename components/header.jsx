import React, { useState } from 'react';
import styles from '../styles/header.module.scss'
import Image from 'next/image'
import logo from '../images/logo.png'
import SideNavPanel from './sideNavPanel'
import Hamburger from '../components/hamburgerMenu'
import onClickOutside from "react-onclickoutside";
import Link from 'next/link'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    Header.handleClickOutside = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className={styles.headerContainer}>
            <Link href="/">
                <div className={styles.logoContainer}>
                    <Image
                        alt="The New Pork Times Logo"
                        src={logo}>
                    </Image>
                </div>
            </Link>
                <div className={`${styles.navContainer} navContainer`} onClick={() => setMenuOpen(false)}>
                    <SideNavPanel setmenuopen={setMenuOpen}/>
                </div>
                <div
                className={styles.hamburger}
                onClick={() => {
                        toggleMenu(true)
                }}>
                    <Hamburger menuopen={menuOpen}/>
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

const clickOutsideConfig = {
    handleClickOutside: () => Header.handleClickOutside,
  };

export default onClickOutside(Header, clickOutsideConfig);