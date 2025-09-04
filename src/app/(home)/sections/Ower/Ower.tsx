import Image from 'next/image'
import styles from './Ower.module.scss'
import Container from '@/shared/ui/Container'
export default function Ower() {
    return (
        <section className={styles.Ower}>
            <Container>
                <div className={styles.contend}>
                <div className={styles.boxs}>
                    <div className={styles.box1}>
                        <div className={styles.medal}>
                            <Image src={"/assets/Component 1 (1).svg"} alt='medal' height={100} width={100} />
                            <div className={styles.span}>
                                <span>Over 15 Years of <br />
                                    Experience</span>
                            </div>
                        </div>
                        <p>Guiding businesses into the UAE
                            market since 2009 with proven
                            expertise.</p>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.pazzle}>
                            <Image src={"/assets/Component 1 (2).svg"} alt='medal' height={100} width={100} />
                            <div className={styles.span}>
                                <span>Comprehensive <br />
                                    Solutions</span>
                            </div>
                        </div>
                        <p>All services under one roof, from
                            <br /> company setup to ongoing
                            <br /> support.</p>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.ruki}>
                            <Image src={"/assets/Component 1 (3).svg"} alt='medal' height={100} width={100} />
                            <div className={styles.span}>
                                <span>Personalised Service</span>
                            </div>
                        </div>
                        <p>Advice and solutions
                            <br /> tailored to your unique
                            <br /> business needs.</p>
                    </div>
                </div>
                <div className={styles.boxs2}>
                    <div className={styles.box2}>
                        <div className={styles.times}>
                            <Image src={"/assets/Component 1 (4).svg"} alt='medal' height={100} width={100} />
                            <div className={styles.span}>
                                <span>Fast Registration</span>
                            </div>
                        </div>
                        <p>Start your business in as little as 48 hours.</p>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.support}>
                            <Image src={"/assets/Component 1 (5).svg"} alt='medal' height={100} width={100} />
                            <div className={styles.span}>
                                <span>24/7 Support</span>
                            </div>
                        </div>
                        <p>Round-the-clock assistance whenever you need it.</p>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.security}>
                            <Image src={"/assets/Component 1 (6).svg"} alt='medal' height={100} width={100} />
                            <div className={styles.span}>
                                <span>Trusted Network</span>
                            </div>
                        </div>
                        <p>Strong partnerships with banks and government agencies for a smooth setup.</p>
                    </div>
                </div>
                </div>
            </Container>
                    </section>
    )
}