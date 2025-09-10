
import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
import styles from './Herod.module.scss'
import Buttontg from '@/app/(home)/sections/hero/buttontg/Buttontg'


export default function Herod(){
    return(
        <>
            <div className={styles.logo}></div>
    <div className={styles.heroInfo}>
      <h1 className={styles.h1}>Всё, что вы хотели узнать — в 
        <br />одном месте
</h1>
      <p className={styles.p}>Мы собрали ответы на самые распространённые вопросы от наших клиентов. 
        <br />Если не нашли нужной информации — напишите нам, и мы поможем.</p>
      <Btnfree/>
    </div>
    <div className={styles.buttontg}><Buttontg/></div>
    </>
    )
}