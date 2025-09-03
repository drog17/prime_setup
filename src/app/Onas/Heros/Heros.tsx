import styles from './Heros.module.scss'
import { Buttonfree } from '@/shared/Buttonfree/Buttonfree'
import  Buttonts from '@/shared/Buttonts/Buttonts'


export default function Heros(){
return (
    <>
    <div className={styles.logo}></div>
    <div className={styles.heroInfo}>
      <h1 className={styles.h1}>Начните бизнес в ОАЭ с экспертами, которым доверяют
</h1>
      <p className={styles.p}>Мы не просто консультируем — мы сопровождаем ваш успех с первого шага.
Наша команда помогает предпринимателям из разных стран открыть бизнес в ОАЭ быстро, прозрачно и без стресса. Мы знаем, с чего начать и как избежать ошибок, потому что уже помогли сотням клиентов пройти этот путь.</p>
      <Buttonfree/>
    </div>
    <div className={styles.buttontg}><Buttonts/></div>
    </>
)
}