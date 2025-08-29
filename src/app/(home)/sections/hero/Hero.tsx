import { buffer } from 'stream/consumers';
import styles from './Hero.module.scss'
import Image from 'next/image';
import Buttontg from './buttontg/Buttontg';
import Btnfree from './btnconsultating/Btnfree';

function Hero() {
  return (
    <>
    <div className={styles.logo}></div>
    <div className={styles.heroInfo}>
      <h1 className={styles.h1}>Start Your Business Setup in<br/> Dubai with Confidence</h1>
      <p className={styles.p}>
        Prime Setup offers clear, step-by-step support for business setup<br/> in Dubai. From company registration to licensing and ongoing<br/>assistance, we guide you through each stage.
      </p>
      <Btnfree/>
    </div>
    <div className={styles.buttontg}><Buttontg/></div>
    </>
  )
}
export default Hero
