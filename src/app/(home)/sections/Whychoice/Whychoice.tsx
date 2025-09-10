"use client"
import Image from 'next/image'
import styles from './Whychoice.module.scss'
import Link from 'next/link'
import useLangStore from '@/shared/Constants/useLangStore'
import WhychoiceEn from '@/shared/Constants/lang/en/HomeEn/WhychiceEn'
import WhychoiceRu from '@/shared/Constants/lang/ru/HomeRu/WhychoiceRu'
export default function Whychoice() {
    const {lang,set}=useLangStore()
    return (
        <section className={styles.Why}>
            <div className={styles.box}>
                <div className={styles.choice}>
                    <h2>{lang==="EN" ? WhychoiceEn.title : WhychoiceRu.title}</h2>
                    <p>{lang==="EN" ? WhychoiceEn.subtitle : WhychoiceRu.subtitle}</p>
                </div>
                <div className={styles.btn}>
                    <a href="/about"><button>{lang==="EN" ? WhychoiceEn.btn :WhychoiceRu.btn}</button></a>
                    <div className={styles.rectan}>
                        <Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40} />
                    </div>
                </div>
            </div>
        </section>
    )
}