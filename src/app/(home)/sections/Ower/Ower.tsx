"use client"
import Image from 'next/image'
import styles from './Ower.module.scss'
import Container from '@/shared/ui/Container'
import useLangStore from '@/shared/Constants/useLangStore'
import OwerEn from '@/shared/Constants/lang/en/HomeEn/OwerEn'
import OwerRu from '@/shared/Constants/lang/ru/HomeRu/OwerRu'
export default function Ower() {
    const {lang,set}=useLangStore()
    return (
        <section className={styles.Ower}>
            <Container>
                <div className={styles.contend}>
                    <div className={styles.boxs}>
                        <div className={styles.box1}>
                            <div className={styles.medal}>
                                <Image src={"/assets/Component 1 (1).svg"} alt='medal' height={100} width={100} />
                                <div className={styles.span}>
                                    <span>{lang==="EN" ? OwerEn.medalSpan : OwerRu.medalSpan}</span>
                                </div>
                            </div>
                            <p>{lang==="EN" ? OwerEn.medalP : OwerRu.medalP}</p>
                        </div>
                        <div className={styles.box1}>
                            <div className={styles.pazzle}>
                                <Image src={"/assets/Component 1 (2).svg"} alt='medal' height={100} width={100} />
                                <div className={styles.span}>
                                    <span>{lang==="EN" ? OwerEn.pazzleSpan : OwerRu.pazzleSpan}</span>
                                </div>
                            </div>
                            <p>{lang==="EN" ? OwerEn.pazzleP : OwerRu.pazzleP}</p>
                        </div>
                        <div className={styles.box1}>
                            <div className={styles.ruki}>
                                <Image src={"/assets/Component 1 (3).svg"} alt='medal' height={100} width={100} />
                                <div className={styles.span}>
                                    <span>{lang==="EN" ? OwerEn.rukiSpan : OwerRu.rukiSpan}</span>
                                </div>
                            </div>
                            <p>{lang==="EN" ? OwerEn.rukiP : OwerRu.rukiP}</p>
                        </div>
                    </div>
                    <div className={styles.boxs2}>
                        <div className={styles.box2}>
                            <div className={styles.times}>
                                <Image src={"/assets/Component 1 (4).svg"} alt='medal' height={100} width={100} />
                                <div className={styles.span}>
                                    <span>{lang==="EN" ? OwerEn.timesSpan : OwerRu.timesSpan}</span>
                                </div>
                            </div>
                            <p>{lang==="EN" ? OwerEn.timesP : OwerRu.timesP}</p>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.support}>
                                <Image src={"/assets/Component 1 (5).svg"} alt='medal' height={100} width={100} />
                                <div className={styles.span}>
                                    <span>{lang==="EN" ? OwerEn.supportSpan : OwerRu.supportSpan}</span>
                                </div>
                            </div>
                            <p>{lang==="EN" ? OwerEn.supportP : OwerRu.supportP}</p>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.security}>
                                <Image src={"/assets/Component 1 (6).svg"} alt='medal' height={100} width={100} />
                                <div className={styles.span}>
                                    <span>{lang==="EN" ? OwerEn.securitySpan : OwerRu.securitySpan}</span>
                                </div>
                            </div>
                            <p>{lang==="EN" ? OwerEn.securityP : OwerRu.securityP}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}