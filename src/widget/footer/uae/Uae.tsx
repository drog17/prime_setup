import styles from './Uae.module.scss'
import frame34158 from '../../../../public/assets/Frame 34158.jpg'
import Image from 'next/image';
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree';
function Uae() {
  return (
    <>
      <div className={styles.UAEcontainer}>
        <h1 className={styles.h1}>Open a business in the UAE with
          <br /><a href="" className={styles.ps}>PRIME SETUP</a>today</h1>
        <p className={styles.p}>We will help you at all stages - from registration to opening a bank account. Start your path to success with us!</p>
        <div className={styles.Btnfree}><Btnfree/></div>
      </div>
    </>
  )
}

export default Uae
