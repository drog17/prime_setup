"use client"
import Image from 'next/image'
import styles from './Clientlike.module.scss'
import ClientSwiper from './ClientSwiper'
import useLangStore from '@/shared/Constants/useLangStore'
export default function Clientlike() {
    const {lang,set}=useLangStore()
    return (
        <section className={styles.section}>
            <h2>{lang==="EN" ? ClientlikeEn.title : ClientlikeRu.title}</h2>
            <div className={styles.page}>
                <div className={styles.logo}>
                    <div className={styles.boxs}>
                        <ClientSwiper />
                    </div>
                    <div className={styles.btn}>
                        <button>{lang==="EN" ? ClientlikeEn.btn : ClientlikeRu.btn}</button>
                        <div className={styles.rectan}>
                            <Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const ClientlikeEn={
    title:"Successes shared by our clients",
    btn:"Leave a review"
}
const ClientlikeRu={
    title:"Успехи, которыми делятся наши клиенты",
    btn:"Оставить отзыв"
}