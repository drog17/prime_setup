import Link from 'next/link'
import styles from './Btnfree.module.scss'

function Btnfree() {
  return (
    <div>
    <Link href="/ContactsPage"> <button className={styles.button}> Book a Free Consultation</button></Link> 
    </div>
  )
}

export default Btnfree
