import Image from 'next/image'
import styles from './Missiya.module.scss'
export default function Missiya() {
    return(
        <section className={styles.section}>
<div className={styles.content}>
    <h1>Что нами движет?</h1>
    <div className={styles.mission}>
        <div className={styles.missiya}>
            <div className={styles.box}>
                <h2>Наша миссия:</h2>
                <p>Помогать предпринимателям запускать и 
                    <br />развивать бизнес в ОАЭ, создавая для них 
                    <br />простую и безопасную среду для старта.</p>
            </div>
            <div className={styles.box2}>
                <h2>Наши ценности:</h2>
                <p>Честность и прозрачность — вы всегда знаете,
                    <br />за что платите.
                    <br />Ответственность — мы сопровождаем на 
                    <br />каждом этапе, от идеи до первых клиентов.
                    <br />Скорость и эффективность — работаем
                    <br /> оперативно, соблюдая сроки и 
                    <br />законодательство.</p>
            </div>
            <Image src={"/assets/Airbrush-image-Enhancer (4).svg"} alt='Airbrush' width={636} height={636} />
        </div>
    </div>
</div>
        </section>
    )
}