"use client"
import styles from './Footer.module.scss'
import frame3 from '../../../public/assets/Frame 3 (1).svg'
import Image from 'next/image';
import facebook from '../../../public/assets/Facebook-Icon.svg'
import twitter from '../../../public/assets/Twitter-Icon.svg'
import instagram from '../../../public/assets/Instagram-Icon.svg'
import  linkedin from '../../../public/assets/LinkedIn-Icon.svg'
import youtube from '../../../public/assets/Youtube-Icon.svg'
import frame from '../../../public/assets/Frame 34123.svg'
import telsvg from '../../../public/assets/Component 3.svg'
import Uae from './uae/Uae';
import useLangStore from '@/shared/Constants/useLangStore';
import FooterEn from '@/shared/Constants/lang/en/footerEn/FooterEn';
import FooterRu from '@/shared/Constants/lang/ru/FooterRu/FooterRu';
import HeaderRu from '@/shared/Constants/lang/ru/HeaderRu/HeaderRu';
import HeaderEn from '@/shared/Constants/lang/en/HeaderEn/HeaderEn';

export default function Footer(){
        const {lang, set} = useLangStore()
    return(
        <>
            <footer className={styles.footer}>  
                 <div className={styles.uae}><Uae/></div>
                 <div className={styles.house}>
                    <div className={styles.roof}></div>
                       <div className={styles.bodydy}>
                    </div>
                </div>
                 <div className={styles.container}>
                    <div className={styles.footerCard}>
                        <div className={styles.card1}>
                            <Image src={frame3}  alt='' className={styles.frame3}/>
                            <p className={styles.p}>{lang === "EN" ? FooterEn.Card1 : FooterRu.Card1}</p>
                            <div className={styles.sotsialImages}>
                                <Image src={facebook}  alt='' />
                                <Image src={twitter}  alt='' className={styles.images} />
                                <Image src={instagram}  alt='' className={styles.images}/>
                                <Image src={linkedin}  alt='' className={styles.images}/>
                                <Image src={youtube}  alt='' className={styles.images} />
                            </div>
                        </div>
                        <div className={styles.card2}>
                            <div className={styles.catalogs}>
                                <p className={styles.nameS}>Sections</p>
                                <p className={styles.smallP}>{lang === "EN" ? HeaderEn.about : HeaderRu.about}</p>
                                <p  className={styles.smallP}>{lang === "EN" ? HeaderEn.cervices : HeaderRu.cervices}</p>
                                <p  className={styles.smallP}>{lang==="EN"? HeaderEn.blog : HeaderRu.blog}</p>
                                <p  className={styles.smallP}>FAQ</p>
                                <p  className={styles.smallP}>{lang==="EN"? HeaderEn.contacts : HeaderRu.contacts}</p>
                            </div>
                            <div className={styles.catalogs}>
                                <p className={styles.nameS}>{lang==="EN" ? FooterEn.nameS : FooterRu.nameS}</p>
                                <p className={styles.smallP}>{lang==="EN" ? FooterEn.smallP : FooterRu.smallP}</p>
                                <p  className={styles.smallP}>{lang==="EN" ? FooterEn.smallP2 : FooterRu.smallP2}</p>
                            </div>
                            <div className={styles.catalogs}>
                                <p className={styles.nameS}>{lang==="EN" ? FooterEn.contact : FooterRu.contact}</p>
                                <p className={styles.smallP}><Image src={frame} alt=''/>info.xyz@gmail.com</p>
                                <p  className={styles.smallP}><Image src={telsvg} alt=''/>+996 476-924</p>
                            </div>
                        </div>
                    </div>
                     <div className={styles.palochka}></div>
                     <p className={styles.text}> {lang==="EN" ? FooterEn.palochka : FooterRu.palochka}</p>
                 </div>
            </footer>
        </>
    )
}