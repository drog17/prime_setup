import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
import styles from './Uae.module.scss'
export default function Uae() {
    return(
            <div className={styles.UAEcontainer}>
        <h1 className={styles.h1}>Open a business in the UAE with
          <br /><a href="" className={styles.ps}>PRIME SETUP</a>today</h1>
        <p className={styles.p}>We will help you at all stages - from registration to opening a bank account. Start your path to success with us!</p>
        <div className={styles.Btnfree}><Btnfree/></div>
      </div>
    )
}