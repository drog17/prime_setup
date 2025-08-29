"use client";

import Container from "@/shared/ui/Container";
import styles from "./free.module.scss";
import Image from "next/image";

export default function FreeConsultation() {
    return (
        <section className={styles.free}>
            <Container>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        How We Set Up Your Business: Step by Step
                    </h2>
                    <div className={styles.content}>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/illustration-consultation.png"
                                    alt="Free Consultation"
                                    width={300}
                                    height={300}
                                    borde-radius={70}
                                />
                            </div>  
                            <div className={styles.text}>
                                <h3 className={styles.cardTitle}>Free Consultation</h3>
                                <p>
                                    We begin with a personal consultation to <br /> understand your business
                                    vision and objectives. <br /> Our experts discuss the best options for your <br />
                                    needs and provide clear guidance on the most <br /> suitable setup. You’ll
                                    receive all the information <br /> required to make decisions confidently
                                    and move <br /> forward with clarity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.dots}>
                        <span className={styles.dot} />
                        <span className={`${styles.dot} ${styles.active}`} />
                        <span className={styles.dot} />
                        <span className={styles.dot} />
                    </div>
                </div>
            </Container>
        </section>
    );
}
