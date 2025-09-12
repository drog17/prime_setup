"use client"
import Image from 'next/image'
import styles from './Userfull.module.scss'
import Link from 'next/link'
import useLangStore from '@/store/useLangStore'



const UseEn={
    title:"Useful articles and tips",
    subtitle:"Stay up to date with the latest news on UAE business, visas, licenses and more."
}

const UseRu={
    title:"Полезные статьи и советы",
    subtitle:"Будьте в курсе последних новостей о бизнесе в ОАЭ, визах, лицензиях и многом другом."
}

export default function Userfull() {
    const {lang}=useLangStore()

    return (
        <section className={styles.section}>
            <div className={styles.Userfull}>
                <h2>{lang==="EN" ? UseEn.title : UseRu.title}</h2>
                <p>{lang==="EN" ? UseEn.subtitle : UseRu.subtitle}</p>
            </div>
            <div className={styles.Group}>
                <div className={styles.container}>
                    <div className={styles.boxs}>
                        <div className={styles.box}>
                            <div className={styles.div}></div>
                            <div className={styles.text}>
                                <h2>How to open a company in
                                    <br />Dubai: Step-by-step
                                    <br />instructions</h2>
                                <p>Starting a business in Dubai is easy. We
                                    <br />tell you where to start, what documents
                                    <br /> you need and how long the registration
                                    <br />process takes.</p>
                            </div>
                            <div className={styles.read}>
                                <Link href="/blog"><span>Read more</span>
                                    <Image src={"/assets/icon (1).svg"} alt='icon' width={15} height={9} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.div}></div>
                            <div className={styles.text}>
                                <h2>How to open a company in
                                    <br />Dubai: Step-by-step
                                    <br />instructions</h2>
                                <p>Starting a business in Dubai is easy. We
                                    <br />tell you where to start, what documents
                                    <br /> you need and how long the registration
                                    <br />process takes.</p>
                            </div>
                            <div className={styles.read}>
                                <Link href="/blog"><span>Read more</span>
                                    <Image src={"/assets/icon (1).svg"} alt='icon' width={15} height={9} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.div}></div>
                            <div className={styles.text}>
                                <h2>How to open a company in
                                    <br />Dubai: Step-by-step
                                    <br />instructions</h2>
                                <p>Starting a business in Dubai is easy. We
                                    <br />tell you where to start, what documents
                                    <br /> you need and how long the registration
                                    <br />process takes.</p>
                            </div>
                            <div className={styles.read}>
                                <Link href="/blog"><span>Read more</span>
                                    <Image src={"/assets/icon (1).svg"} alt='icon' width={15} height={9} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btn}>
             <Link href="/blog">   <button>View all articles</button></Link>
                        <div className={styles.rectan}>
                            <Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.border}></div>
        </section>
    )
}