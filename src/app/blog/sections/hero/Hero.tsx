"use client"
import styles from './hero.module.scss'
import {Buttonfree} from '@/shared/Buttonfree/Buttonfree'
import useLangStore from '@/store/useLangStore'
import HeroEn from '@/shared/Constants/lang/en/BlogEn/HeroEn'
import HeroRu from '@/shared/Constants/lang/ru/BlogRu/HeroRu'
import Buttontg from '@/app/(home)/sections/hero/buttontg/Buttontg'
<<<<<<< HEAD
=======
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
>>>>>>> c960e7e7230d276a5cb7835f343da21e9a3e663f

export default function Hero(){
  const{lang}=useLangStore()
  return (
    <>
      <div className={styles.logo}></div>
      <div className={styles.heroInfo}>
        <h1 className={styles.h1}>{lang==="EN" ? HeroEn.title : HeroRu.title}</h1>
        <p className={styles.p}>{lang==="EN" ? HeroEn.subtitle : HeroRu.subtitle}</p>
        <Buttonfree />
      </div>
      <div className={styles.buttontg}><Buttontg /></div>
    </>
  )
<<<<<<< HEAD
=======

>>>>>>> c960e7e7230d276a5cb7835f343da21e9a3e663f
}