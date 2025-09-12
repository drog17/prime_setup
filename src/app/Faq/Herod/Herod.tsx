"use client"
import Buttontg from '@/app/(home)/sections/hero/buttontg/Buttontg'
import styles from './Herod.module.scss'
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
import useLangStore from '@/store/useLangStore'
import HerosEn from '@/shared/Constants/lang/en/HomeEn/HerosEn'
import HerosRu from '@/shared/Constants/lang/ru/HomeRu/HerosRu'


export default function Herod(){
        const {lang}=useLangStore()
    return(
        <>
            <div className={styles.logo}></div>
    <div className={styles.heroInfo}>
      <h1 className={styles.h1}>{lang==="EN" ? HerosEn.title : HerosRu.title}</h1>
      <p className={styles.p}>{lang==="EN" ? HerosEn.text : HerosRu.text}</p>
        <div className={styles.btn}>
      <Btnfree/>
      </div>
    </div>
    <div className={styles.buttontg}><Buttontg/></div>
    </>
    )
}