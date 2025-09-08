import styles from './Uae.module.scss'
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree';
import UaeEn from '@/shared/Constants/lang/en/footerEn/UaeEn';
import UaeRu from '@/shared/Constants/lang/ru/FooterRu/UaeRu';
import useLangStore from '@/shared/Constants/useLangStore';

function Uae() {
  const { lang, set } = useLangStore()
  return (
    <>
      <div className={styles.UAEcontainer}>
        <h2 className={styles.h2}>{lang==="EN" ? UaeEn.h2 : UaeRu.h2}</h2>
        <p className={styles.p}>{lang==="EN" ? UaeEn.p : UaeRu.p}</p>
        <div className={styles.Btnfree}><Btnfree /></div>
      </div>
    </>
  )
}

export default Uae
