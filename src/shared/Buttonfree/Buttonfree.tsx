"use client"
import useLangStore from '../../store/useLangStore'
import styles from './Buttonfree.module.scss'

export const Buttonfree = () => {
  const{lang}=useLangStore()
  return (
     <div>
      <button className={styles.button}>{lang==="EN" ? btnfreeEn.btn : btnfreeRu.btn}</button>
    </div>
  )
}
const btnfreeEn={
  btn:"Book a Free Consultation"
}
const btnfreeRu={
  btn:"Бесплатная консультация"
}