import Container from '@/shared/ui/Container'
import styles from './hero.module.scss'
import Buttonts from '@/shared/Buttonts/Buttonts'


export default function Hero(){
    return(
        <>
        <section className={styles.hero}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>Полезные статьи и советы</h2>
                        <p>Мы делимся полезной информацией, основанной на реальном опыте работы с <br /> предпринимателями. Узнайте о тонкостях регистрации компаний, налогах, <br /> визах и многом другом.</p>
                    </div>
                    <div className={styles.btn}><Buttonts/></div>
                </div>
            </Container>
        </section>
        </>
    )
}