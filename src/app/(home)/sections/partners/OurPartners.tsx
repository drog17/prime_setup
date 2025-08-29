"use client";

import Container from '@/shared/ui/Container'
import styles from './partner.module.scss'
import Image from 'next/image'

export default function OurPartner() {
    return (
        <section className={styles.partner}>
            <Container>
                <div className={styles.content}>
                    <h2 className={styles.title}>Our partners</h2>
                    <div className={styles.partners}>
                        <Image
                            src="/company.png"
                            alt="Free Consultation"
                            width={241}
                            height={71}
                        />
                        <Image
                            src="/company.png"
                            alt="Free Consultation"
                            width={241}
                            height={71}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}