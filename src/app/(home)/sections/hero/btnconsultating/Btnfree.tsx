"use client"
import useLangStore from '@/shared/Constants/useLangStore'
import styles from './Btnfree.module.scss'
import Link from 'next/link'

function Btnfree() {
    const { lang, set } = useLangStore()
  return (
    <div>

      <Link href="/ContactsPage"> <button className={styles.button}>{lang==="EN" ? ButtonfreeEn.title : ButtonfreeRu.title}</button></Link> 
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
