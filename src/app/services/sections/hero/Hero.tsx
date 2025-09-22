"use client"
import styles from './Hero.module.scss'
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
import Buttontg from '@/app/(home)/sections/hero/buttontg/Buttontg'
import useLangStore from '@/store/useLangStore'
import HeroEn from '@/shared/Constants/lang/en/ServicesEn/HeroEn'
import HeroRu from '@/shared/Constants/lang/ru/ServicesRu/HeroRu'
export default function Hero () {
const { lang } = useLangStore()
  return (
    <>
       <div className={styles.logo}></div>
        <div className={styles.overlay}></div>
    <div className={styles.heroInfo}>
      <h1 className={styles.h1}>{lang === "EN" ? HeroEn.title : HeroRu.title}</h1>
      <p className={styles.p}>{lang === "EN" ? HeroEn.text : HeroRu.text}</p>
      <div className={styles.btn}>
        <Btnfree/>
      </div>
    </div>
    <div className={styles.buttontg}><Buttontg/></div>
    </>
  )
}
