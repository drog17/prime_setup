import Link from 'next/link'
import styles from './Consulbtn.module.scss'
import useLangStore from '@/store/useLangStore'

  const SingEn = {
    title: "Sign up for a consultation"
  }
  const SingRu = {
    title: "Записаться на консультацию"
  }
function BtnConsultation() {
   const { lang } = useLangStore()
  return (
    <>
    <Link href="/ContactsPage">
      <button className={styles.zapisatsaNaConsultat}>{lang === "EN" ? SingEn.title : SingRu.title}</button>
      </Link>
    </>
  )
}

export default BtnConsultation;
