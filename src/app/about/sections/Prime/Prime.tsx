"use client"
import PrimeEN from '@/shared/Constants/lang/en/AboutEn/PrimeEn'
import styles from './Prime.module.scss'
import PrimeRu from '@/shared/Constants/lang/ru/AboutRu/PrimeRu'
import useLangStore from '@/store/useLangStore'
export default function Prime() {
   const {lang}=useLangStore()
    return (
      <section className={styles.section}>
        <div className={styles.prime}>
            <h2>{lang==="EN" ? PrimeEN.title : PrimeRu.title}</h2>
            <p>{lang==="EN" ? PrimeEN.text : PrimeRu.text}</p>
        </div>
      </section>  
    )
}