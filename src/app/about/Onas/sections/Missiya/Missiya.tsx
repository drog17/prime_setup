"use client"
import Image from 'next/image'
import styles from './Missiya.module.scss'
import MissiyaEn from '@/shared/Constants/lang/en/HomeEn/MissiyaEn'
import MissiyaRu from '@/shared/Constants/lang/ru/HomeRu/MissiyaRu'
import useLangStore from '@/store/useLangStore'
export default function Missiya() {
     const {lang,set}=useLangStore()
    return(
        <section className={styles.section}>
<div className={styles.content}>
    <h2>{lang==="EN" ? MissiyaEn.title : MissiyaRu.title}</h2>
    <div className={styles.mission}>
        <div className={styles.missiya}>
            <div className={styles.box}>
                <h3>{lang==="EN" ? MissiyaEn.misiya : MissiyaRu.misiya}</h3>
                <p>{lang==="EN" ? MissiyaEn.text : MissiyaRu.text}</p>
            </div>
            <div className={styles.box2}>
                <h3>{lang==="EN" ? MissiyaEn.nash : MissiyaRu.nash}</h3>
                <p>{lang==="EN" ? MissiyaEn.speed : MissiyaRu.speed}</p>
            </div>
            <Image src={"/assets/Airbrush-image-Enhancer (4).svg"} alt='Airbrush' width={636} height={636} />
        </div>
    </div>
</div>
        </section>
    )
}