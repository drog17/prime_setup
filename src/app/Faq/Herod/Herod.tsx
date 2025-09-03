import { Buttonfree } from '@/shared/Buttonfree/Buttonfree'
import styles from './Herod.module.scss'
import Buttonts from '@/shared/Buttonts/Buttonts'

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
      <Buttonfree/>
    </div>
    <div className={styles.buttontg}><Buttonts/></div>
    </>
    )
}