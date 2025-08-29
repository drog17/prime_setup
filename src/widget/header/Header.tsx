import styles from './Header.module.scss'
import frame3 from '../../../public/assets/Frame 3 (1).svg'
import Image from 'next/image';
import arrowPng from '../../../public/assets/Arrow - Right 2.png' 

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Image src={frame3}  alt='' className={styles.frame3}/>
                   <div className={styles.catalogs}>
                        <li className={styles.li}>About Us</li>
                        <li  className={styles.li}>Services</li>
                        <li  className={styles.li}>Blog</li>
                        <li  className={styles.li}>FAQ</li>
                        <li  className={styles.li}>Contacts</li>
                        <li className={styles.languages}>En <Image src={arrowPng} alt=''/></li>
                        <button className={styles.buttonLeav}>Leave a request</button>
                   </div>
                </div>
            </header>
        </>
    )
}