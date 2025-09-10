"use client"
import styles from './Header.module.scss'
import frame3 from '../../../public/assets/Frame 3 (1).svg'
import Image from 'next/image';
import arrowPng from '../../../public/assets/Arrow - Right 2.png'
import Link from 'next/link';
import AuthModal from '@/shared/Authorization/Authorization';
import { useState } from 'react';
interface HeaderProps {
  variant?: 'detailtHeader'; 
}
export default function Header({ variant = 'detailtHeader' }: HeaderProps){
 const [showModal, setShowModal] = useState(false);
    return (
        <>
            <header className={`${styles.header} ${[variant]}`}>
                <div className={styles.container}>
                    <Link href="/"><Image src={frame3} alt='' className={styles.frame3} /></Link>
                    <div className={styles.catalogs}>
                        <Link className={styles.nodirection} href="/about"><li className={styles.li}>About Us</li></Link>
                        <Link className={styles.nodirection} href="/services"><li className={styles.li}>Services</li></Link>
                        <Link className={styles.nodirection} href="/blog"><li className={styles.li}>Blog</li></Link>
                        <Link className={styles.nodirection} href="/Faq"><li className={styles.li}>FAQ</li></Link>
                        <Link className={styles.nodirection} href="/ContactsPage"><li className={styles.li}>Contacts</li></Link>
                        <li className={styles.languages}>En <Image src={arrowPng} alt='' /></li>
                        <button onClick={() => setShowModal(true)}className={styles.buttonLeav}>Leave a request</button>
                        {showModal && <AuthModal onClose={() => setShowModal(false)} />}
                    </div>
                </div>
            </header>
        </>
    )
}