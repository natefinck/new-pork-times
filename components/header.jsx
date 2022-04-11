import styles from '../styles/header.module.scss'
import Image from 'next/image'
import logo from '../images/logo.svg'

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <Image
                    alt="The New Pork Times Logo"
                    src={logo}>
                </Image>
            </div>
            <div className={styles.navContainer}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Posts</li>
                </ul>
            </div>
        </div>
    )
}