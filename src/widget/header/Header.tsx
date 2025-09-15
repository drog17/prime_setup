"use client"
import { useState } from 'react'
import styles from './Header.module.scss'
import frame3 from '../../../public/assets/Frame 3 (1).svg'
import Image from 'next/image';
import arrowPng from '../../../public/assets/Arrow - Right 2.png'
import Link from 'next/link';
import HeaderEn from '@/shared/Constants/lang/en/HeaderEn/HeaderEn';
import useLangStore from '@/store/useLangStore';
import HeaderRu from '@/shared/Constants/lang/ru/HeaderRu/HeaderRu';
import Container from '@/shared/ui/Container';

export default function Header() {
    const { lang, set } = useLangStore()
      const [open, setOpen] = useState(false)
    return (
        <>
            <header className={styles.header}>
                <Container>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <Link href="/"><Image src={frame3} alt='' className={styles.frame3} /></Link>
                            <div className={styles.catalogs}>
                                <ul>
                                <Link className={styles.nodirection} href="/about"><li className={styles.li}>{lang === "EN" ? HeaderEn.about : HeaderRu.about}</li></Link>
                                <Link className={styles.nodirection} href="/services"><li className={styles.li}>{lang === "EN" ? HeaderEn.services : HeaderRu.services}</li></Link>
                                <Link className={styles.nodirection} href="/blog"><li className={styles.li}>{lang === "EN" ? HeaderEn.blog : HeaderRu.blog}</li></Link>
                                <Link className={styles.nodirection} href="/Faq"><li className={styles.li}>{lang === "EN" ? HeaderEn.faq : HeaderRu.faq}</li></Link>
                                <Link className={styles.nodirection} href="/ContactsPage"><li className={styles.li}>{lang === "EN" ? HeaderEn.contacts : HeaderRu.contacts}</li></Link>
                                </ul>
                                   <div className={styles.langWrapper}>
            <div className={styles.languages} onClick={() => setOpen(!open)}>
              {lang} <Image src={arrowPng} alt='' />
            </div>
            {open && (
              <div className={styles.langMenu}>
                <div className={styles.ru} onClick={() => { set("Ru"); setOpen(false) }}>RU</div>
                <div className= {styles.en} onClick={() => { set("EN"); setOpen(false) }}>EN</div>
              </div>
            )}
          </div>
                                <button className={styles.buttonLeav}>{lang === "EN" ? HeaderEn.buttonleave : HeaderRu.buttonleave}</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}