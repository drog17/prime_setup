import Container from '@/shared/ui/Container'
import styles from './hero.module.scss'
import Buttonts from '@/shared/Buttonts/Buttonts'
import { Buttonfree } from '@/shared/Buttonfree/Buttonfree'
import Buttontg from '@/app/(home)/sections/hero/buttontg/Buttontg'


export default function Hero(){
    return(
        <>
        <div className={styles.logo}></div>
    <div className={styles.heroInfo}>
      <h1 className={styles.h1}>Полезные статьи и советы</h1>
      <p className={styles.p}>
        Мы делимся полезной информацией, основанной на реальном опыте работы с 
        <br />предпринимателями. Узнайте о тонкостях регистрации компаний, налогах, 
        <br />визах и многом другом.</p>
      <Buttonfree/>
    </div>
    <div className={styles.buttontg}><Buttonts/></div>
        </>
    )
}