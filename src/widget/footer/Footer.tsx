import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
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
export default function Footer(){
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
                            <p className={styles.p}>Comprehensive solutions for business registration and support in the UAE.</p>
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
                                <p className={styles.smallP}>About us</p>
                                <p  className={styles.smallP}>Services</p>
                                <p  className={styles.smallP}>Blog</p>
                                <p  className={styles.smallP}>FAQ</p>
                                <p  className={styles.smallP}>Contacts</p>
                            </div>
                            <div className={styles.catalogs}>
                                <p className={styles.nameS}>Working hours</p>
                                <p className={styles.smallP}>Monday to Friday: 8:30 AM –<br/> 5:30 PM</p>
                                <p  className={styles.smallP}>Saturday: 10:00 AM – 2:00 PM</p>
                            </div>
                            <div className={styles.catalogs}>
                                <p className={styles.nameS}>Contact us</p>
                                <p className={styles.smallP}><Image src={frame} alt=''/>info.xyz@gmail.com</p>
                                <p  className={styles.smallP}><Image src={telsvg} alt=''/>+996 476-924</p>
                            </div>
                        </div>
                    </div>
                     <div className={styles.palochka}></div>
                     <p className={styles.text}> 2025 PRIME SETUP. All rights reserved</p>
                 </div>
            </footer>
        </>
    )
}