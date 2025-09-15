"use client"
import Image from 'next/image'
import styles from './Comanda.module.scss'
import ComandaEn from '@/shared/Constants/lang/en/HomeEn/ComandaEn'
import ComandaRu from '@/shared/Constants/lang/ru/HomeRu/ComandaRu'
import useLangStore from '@/store/useLangStore'
export default function Commanda() {
      const {lang}=useLangStore()
    return(
        <section className={styles.section}>
<div className={styles.contend}>
    <div className={styles.text}>
        <h2>{lang==="EN" ? ComandaEn.title : ComandaRu.title}</h2>
        <p>{lang==="EN" ? ComandaEn.text : ComandaRu.text}</p>
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