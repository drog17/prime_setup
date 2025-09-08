"use client";

import Container from '@/shared/ui/Container'
import styles from './partner.module.scss'
import Image from 'next/image'
import useLangStore from '@/shared/Constants/useLangStore';
const PartnerEn={
    title:"Our partners"
}
const PartnerRu={
    title:"Наши партнеры"
}

export default function OurPartner() {
    const{lang,set}=useLangStore()
    return (
        <section className={styles.partner}>
            <Container>
                <div className={styles.content}>
                    <h2 className={styles.title}>{lang==="EN" ? PartnerEn.title : PartnerRu.title}</h2>
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