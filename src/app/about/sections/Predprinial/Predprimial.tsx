"use client"
import PredprimialEn from '@/shared/Constants/lang/en/AboutEn/PredprimialEn'
import styles from './Predprimial.module.scss'
import PredprimialRu from '@/shared/Constants/lang/ru/AboutRu/PredprimialRu'
import useLangStore from '@/store/useLangStore'
export default function Predprimial() {
    const { lang } = useLangStore()
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2>{lang === "EN" ? PredprimialEn.title : PredprimialRu.title}</h2>
                <div className={styles.boxs}>
                    <div className={styles.box}>
                        <div className={styles.box1}>
                            <p>{lang === "EN" ? PredprimialEn.text : PredprimialRu.text}</p>
                        </div>
                        <div className={styles.box2}>
                            <p>{lang === "EN" ? PredprimialEn.work : PredprimialRu.work}</p>
                        </div>
                        <div className={styles.box1}>
                            <p>{lang === "EN" ? PredprimialEn.podhod : PredprimialRu.podhod}</p>
                        </div>
                    </div>
                    <div className={styles.box3}>
                        <div className={styles.box4}>
                            <p>{lang === "EN" ? PredprimialEn.helping : PredprimialRu.helping}</p>
                        </div>
                        <div className={styles.box4}>
                            <p>{lang === "EN" ? PredprimialEn.none : PredprimialRu.none}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}