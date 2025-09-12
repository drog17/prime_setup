"use client"
import Image from 'next/image'
import styles from './Whychoice.module.scss'
import Link from 'next/link'
import useLangStore from '@/store/useLangStore'
import WhychoiceEn from '@/shared/Constants/lang/en/HomeEn/WhychiceEn'
import WhychoiceRu from '@/shared/Constants/lang/ru/HomeRu/WhychoiceRu'
export default function Whychoice() {
    const { lang } = useLangStore()
    return (
        <section className={styles.Why}>
            <div className={styles.box}>
                <div className={styles.choice}>
                    <h2>{lang === "EN" ? WhychoiceEn.title : WhychoiceRu.title}</h2>
                    <p>{lang === "EN" ? WhychoiceEn.subtitle : WhychoiceRu.subtitle}</p>
                </div>
                <div className={styles.btn}>
<<<<<<< HEAD
                    <Link href="/about"><button>{lang === "EN" ? WhychoiceEn.btn : WhychoiceRu.btn}</button></Link>
=======
                    <a href="/about"><button>{lang==="EN" ? WhychoiceEn.btn :WhychoiceRu.btn}</button></a>
>>>>>>> e24245d3c52d90ba9f3afba4cdbcbd78adc3b935
                    <div className={styles.rectan}>
                        <Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40} />
                    </div>
                </div>
            </div>
<<<<<<< HEAD
        </section >
=======
        </section>
>>>>>>> e24245d3c52d90ba9f3afba4cdbcbd78adc3b935
    )
}