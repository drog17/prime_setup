import styles from './Uae.module.scss'
import frame34158 from '../../../../public/assets/Frame 34158.jpg'
import Image from 'next/image';
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree';
function Uae() {
  return (
    <>
      <div className={styles.UAEcontainer}>
        <h1 className={styles.h1}>Откройте бизнес в ОАЭ с <a href="" className={styles.ps}>PRIME SETUP</a> уже сегодня</h1>
        <p className={styles.p}>Мы поможем вам на каждом этапе — от регистрации до открытия банковского счёта. Начните свой путь к успеху вместе с нами!</p>
        <div className={styles.Btnfree}><Btnfree/></div>
      </div>
    </>
  )
}

export default Uae
