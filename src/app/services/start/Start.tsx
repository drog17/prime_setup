"use client"
import styles from './Start.module.scss'
import frame34209 from '../../../../public/assets/Frame 34209 (3).png'
import Image from 'next/image';
import useLangStore from '@/store/useLangStore';
import StartEn from '@/shared/Constants/lang/en/ServicesEn/StartEn';
import StartRu from '@/shared/Constants/lang/ru/ServicesRu/StartRu';
import BtnConsultation from './BtnConsultation/BtnConsultation';
function Start() {
  const { lang } = useLangStore()
  return (
    <>
      <section className={styles.startSectionContainer}>
            <Image src={frame34209}  alt='' className={styles.frame34209}/>
            <div className={styles.smallCont}>
              <h3 className={styles.bigSpan}>{lang === "EN" ? StartEn.title : StartRu.title}</h3>
              <p className={styles.smallSpan}>{lang === "EN" ? StartEn.text : StartRu.text}</p>
              <BtnConsultation/>
            </div>
      </section>
    </>
  )
}

export default Start;
