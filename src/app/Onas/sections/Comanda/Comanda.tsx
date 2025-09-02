import Image from 'next/image'
import styles from './Comanda.module.scss'
export default function Commanda() {
    return(
        <section className={styles.section}>
<div className={styles.contend}>
    <div className={styles.text}>
        <h1>Познакомьтесь с нашей 
            <br />командой</h1>
        <p>Мы верим, что за каждым успешным бизнесом стоят люди. Именно поэтому мы 
            <br />гордимся нашей командой экспертов, которые делают всё, чтобы запуск 
            <br />вашего бизнеса в ОАЭ был простым, безопасным и успешным.</p>
    </div>
    <div className={styles.box}>
        <Image src={"/assets/Group 14.png"} alt='group' width={420} height={603}/>
                <Image src={"/assets/Group 15.png"} alt='group' width={420} height={603}/>
        <Image src={"/assets/image.png"} alt='iamge' width={420} height={603}/>
    </div>
    <div className={styles.box2}>
                <Image src={"/assets/image (1).png"} alt='group' width={420} height={603}/>
                <Image src={"/assets/Group 15 (1).png"} alt='group' width={420} height={603}/>
        <Image src={"/assets/Group 16.png"} alt='iamge' width={420} height={603}/>
    </div>
        <div className={styles.box2}>
                <Image src={"/assets/image (2).png"} alt='group' width={420} height={603}/>
                <Image src={"/assets/Group 15 (2).png"} alt='group' width={420} height={603}/>
        <Image src={"/assets/Group 16 (1).png"} alt='iamge' width={420} height={603}/>
    </div>
</div>
        </section>
    )
}