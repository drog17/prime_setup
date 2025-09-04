import styles from './Predprimial.module.scss'
export default function Predprimial() {
    return(
        <section className={styles.section}>
            <div className={styles.content}>
                <h1>Почему нам доверяют сотни
                    <br /> предпринимателей</h1>
                <div className={styles.boxs}>
<div className={styles.box}>
    <div className={styles.box1}>
        <p>500+ открытых
            <br /> компаний — в разных 
            <br />секторах и зонах</p>
    </div>
    <div className={styles.box2}>
        <p>Опыт работы с 
            <br />иностранными
            <br /> клиентами — говорим на
            <br /> вашем языке</p>
    </div>
        <div className={styles.box1}>
        <p>Комплексный подход — 
            <br />от регистрации до 
            <br />бухгалтерии и виз</p>
    </div>
</div>
<div className={styles.box3}>
    <div className={styles.box4}>
        <p>Персональный 
            <br />менеджер — всегда на связи и готов помочь</p>
    </div>
        <div className={styles.box4}>
        <p>Без скрытых платежей 
            <br />— только честные
            <br /> условия</p>
    </div>
</div>
                </div>
            </div>
        </section>
    )
}