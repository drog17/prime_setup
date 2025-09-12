import React from 'react'
import styles from './services.module.scss'
import Header from '@/widget/header/Header'
import Btnfree from '../(home)/sections/hero/btnconsultating/Btnfree'
import Buttontg from '../(home)/sections/hero/buttontg/Buttontg'
import Spectr from './spectr/Spectr'
import Start from './start/page'
import Footer from '@/widget/footer/Footer'
function page() {
  return (
    <>
      <Header/>
       <div className={styles.logo}></div>
        <div className={styles.overlay}></div>
    <div className={styles.heroInfo}>
      <h1 className={styles.h1}>Start Your Business Setup in<br/> Dubai with Confidence</h1>
      <p className={styles.p}>
        Prime Setup offers clear, step-by-step support for business setup<br/> in Dubai. From company registration to licensing and ongoing<br/>assistance, we guide you through each stage.
      </p>
      <div className={styles.btn}>
        <Btnfree/>
      </div>
    </div>
    <div className={styles.buttontg}><Buttontg/></div>
    <div className={styles.spectr}>
         <Spectr/>
    </div>
    <div className={styles.start}>
      <Start/>
    </div>
       <Footer/>
    </>
  )
}

export default page
