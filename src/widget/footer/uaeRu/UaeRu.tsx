import styles from './UaeRu.module.scss'
import frame34158 from '../../../../public/assets/Frame 34158.jpg'
import Image from 'next/image';
import BtnfreeRU from '@/app/(home)/sections/hero/btnconsultating/BtnFreeRu';
export default function UaeRu() {
  return (
    <>
      <div className={styles.UAEcontainer}>
        <h1 className={styles.h1}>Откройте бизнес в ОАЭ с
          <a href="" className={styles.ps}>PRIME SETUP</a>уже сегодня</h1>
        <p className={styles.p}>Мы поможем вам на каждом этапе — от регистрации до открытия банковского счёта. Начните свой путь к успеху вместе с нами!</p>
        <div className={styles.Btnfree}><BtnfreeRU/></div>
      </div>
    </>
  )
}
