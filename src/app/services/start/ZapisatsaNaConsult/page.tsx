import Link from 'next/link'
import styles from './Consulbtn.module.scss'

function page() {
  return (
    <>
    <Link href="/ContactsPage">
      <button className={styles.zapisatsaNaConsultat}>Записаться на консультацию</button>
      </Link>
    </>
  )
}

export default page
