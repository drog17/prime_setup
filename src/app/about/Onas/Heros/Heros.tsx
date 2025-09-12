"use client"
import Buttontg from '@/app/(home)/sections/hero/buttontg/Buttontg'
import styles from './Heros.module.scss'
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
import HerodEn from '@/shared/Constants/lang/en/HomeEn/HerodEn'
import HerodRu from '@/shared/Constants/lang/ru/HomeRu/HerodRu'
import useLangStore from '@/shared/Constants/useLangStore'

export default function Heros() {
      const {lang,set}=useLangStore()
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