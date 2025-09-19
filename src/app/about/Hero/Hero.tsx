"use client"
import Buttontg from '@/app/(home)/sections/hero/buttontg/Buttontg'
import styles from './Hero.module.scss'
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
import useLangStore from '@/store/useLangStore'
import HerodEn from '@/shared/Constants/lang/en/AboutEn/HeroEn'
import HerodRu from '@/shared/Constants/lang/ru/AboutRu/HeroRu'

export default function Hero() {
      const {lang}=useLangStore()
      return (
            <>
                  <div className={styles.logo}></div>
                  <div className={styles.heroInfo}>
                        <h1 className={styles.h1}>{lang==="EN" ? HerodEn.title : HerodRu.title}</h1>
                        <p className={styles.p}>{lang==="EN"? HerodEn.text: HerodRu.text}</p>
                              <div className={styles.btn}>
                              <Btnfree/>      
                              </div>
                                                </div>
                  <div className={styles.buttontg}><Buttontg /></div>
            </>
      )
}