"use client"
import styles from './Hero.module.scss'
import Buttontg from './buttontg/Buttontg';
import Btnfree from './btnconsultating/Btnfree';
import HeroEn from '@/shared/Constants/lang/en/HomeEn/HeroEn';
import HeroRu from '@/shared/Constants/lang/ru/HomeRu/HeroRu';
import useLangStore from '@/shared/Constants/useLangStore';

function Hero() {
  const { lang, set } = useLangStore()

  return (
    <>
      <div className={styles.logo}></div>
      <div className={styles.heroInfo}>
        <h1 className={styles.h1}>{lang === "EN" ? HeroEn.title : HeroRu.title}</h1>
        <p className={styles.p}>{lang==="EN" ?HeroEn.subtitle : HeroRu.subtitle}</p>
        <Btnfree />
      </div>
      <div className={styles.buttontg}><Buttontg /></div>
    </>
  )
}
export default Hero
