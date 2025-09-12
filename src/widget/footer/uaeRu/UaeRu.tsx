import styles from './UaeRu.module.scss'
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree';
export default function UaeRu() {
  return (
    <>
      <div className={styles.UAEcontainer}>
        <h1 className={styles.h1}>Откройте бизнес в ОАЭ с
          <a href="" className={styles.ps}>PRIME SETUP</a>уже сегодня</h1>
        <p className={styles.p}>Мы поможем вам на каждом этапе — от регистрации до открытия банковского счёта. Начните свой путь к успеху вместе с нами!</p>
        <div className={styles.Btnfree}><Btnfree/></div>
      </div>
    </>
  )
}
