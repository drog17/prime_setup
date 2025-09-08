"use client"
import useLangStore from '@/shared/Constants/useLangStore'
import styles from './Btnfree.module.scss'

function Btnfree() {
    const { lang, set } = useLangStore()
  return (
    <div>
      <button className={styles.button}>{lang==="EN" ? ButtonfreeEn.title : ButtonfreeRu.title}</button>
    </div>
  )
}

const ButtonfreeEn={
  title:'Book a Free Consultation'
}

const ButtonfreeRu={
  title:'Бесплатная консультация'
}
export default Btnfree
