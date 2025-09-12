"use client"
import styles from './hero.module.scss'
<<<<<<< HEAD
import Buttonts from '@/shared/Buttonts/Buttonts'
import {Buttonfree} from '@/shared/Buttonfree/Buttonfree'
import useLangStore from '@/store/useLangStore'
import HeroEn from '@/shared/Constants/lang/en/BlogEn/HeroEn'
import HeroRu from '@/shared/Constants/lang/ru/BlogRu/HeroRu'


export default function Hero() {
  const{lang}=useLangStore()
  return (
    <>
      <div className={styles.logo}></div>
      <div className={styles.heroInfo}>
        <h1 className={styles.h1}>{lang==="EN" ? HeroEn.title : HeroRu.title}</h1>
        <p className={styles.p}>{lang==="EN" ? HeroEn.subtitle : HeroRu.subtitle}</p>
        <Buttonfree />
      </div>
      <div className={styles.buttontg}><Buttonts /></div>
    </>
  )
=======
import Buttontg from '@/app/(home)/sections/hero/buttontg/Buttontg'
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'


export default function Hero(){
    return(
        <>
        <div className={styles.logo}></div>
    <div className={styles.heroInfo}>
      <h1 className={styles.h1}>Полезные статьи и советы</h1>
      <p className={styles.p}>
        Мы делимся полезной информацией, основанной на реальном опыте работы с 
        <br />предпринимателями. Узнайте о тонкостях регистрации компаний, налогах, 
        <br />визах и многом другом.</p>
        <div className={styles.btn}>
      <Btnfree/>
        </div>
    </div>
    <div className={styles.buttontg}><Buttontg/></div>
        </>
    )
>>>>>>> e24245d3c52d90ba9f3afba4cdbcbd78adc3b935
}