"use client"
import Image from 'next/image'
import styles from './Services.module.scss'
import useLangStore from '@/store/useLangStore'
import UsligiEn from '@/shared/Constants/lang/en/HomeEn/UslugiEn'
import UsligiRu from '@/shared/Constants/lang/ru/HomeRu/UslugiRu'
import Container from '@/shared/ui/Container'

export default function Services() {
    const { lang } = useLangStore()
    return (
        <section className={styles.uslugi}>
            <Container>
                <div className={styles.box}>
                    <h2>{lang === "EN" ? UsligiEn.title : UsligiRu.title}</h2>
                    <p>{lang === "EN" ? UsligiEn.subtitle : UsligiRu.subtitle}</p>
                </div>
                <div className={styles.boxs}>
                    <div className={styles.box1}>
                        <div className={styles.burger}>
                            <Image src={"/assets/Frame 34092.svg"} alt='Frame' width={90} height={90} />
                        </div>
                        <span className={styles.span}>{lang === "EN" ? UsligiEn.bgspan : UsligiRu.bgspan}</span>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.cart}>
                            <Image src={"/assets/Component 1 (7).svg"} alt='Frame' width={90} height={90} />
                        </div>
                        <span className={styles.span}>{lang === "EN" ? UsligiEn.cartspan : UsligiRu.cartspan}</span>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.meda}>
                            <Image src={"/assets/Frame 34092 (1).svg"} alt='Frame' width={90} height={73} />
                        </div>
                        <span className={styles.span}>{lang === "EN" ? UsligiEn.medaspan : UsligiRu.medaspan}</span>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.cart}>
                            <Image src={"/assets/Frame 34092 (2).svg"} alt='Frame' width={90} height={90} />
                        </div>
                        <span className={styles.span}>{lang === "EN" ? UsligiEn.officespan : UsligiRu.officespan}</span>
                    </div>
                </div>

                <div className={styles.boxs2}>
                    <div className={styles.box2}>
                        <div className={styles.burger}>
                            <Image src={"/assets/Frame 34092 (3).svg"} alt='Frame' width={90} height={90} />
                        </div>
                        <span className={styles.span}>{lang === "EN" ? UsligiEn.phonespan : UsligiRu.phonespan}</span>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.cart}>
                            <Image src={"/assets/Frame 34092 (4).svg"} alt='Frame' width={90} height={90} />
                        </div>
                        <span className={styles.span}>{lang === "EN" ? UsligiEn.accspan : UsligiRu.accspan}</span>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.passport}>
                            <Image src={"/assets/Frame 34092 (5).svg"} alt='Frame' width={90} height={90} />
                        </div>
                        <span className={styles.span}>{lang === "EN" ? UsligiEn.investspan : UsligiRu.investspan}</span>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.cart}>
                            <Image src={"/assets/Component 1 (8).svg"} alt='Frame' width={90} height={90} />
                        </div>
                        <span className={styles.span}>{lang === "EN" ? UsligiEn.setspan : UsligiRu.setspan}</span>
                    </div>
                </div>

            </Container>
        </section>
    )
}