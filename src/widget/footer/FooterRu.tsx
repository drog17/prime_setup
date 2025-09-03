import Btnfree from '@/app/(home)/sections/hero/btnconsultating/Btnfree'
import styles from './FooterRu.module.scss'
import frame3 from '../../../public/assets/Frame 3 (1).svg'
import Image from 'next/image';
import facebook from '../../../public/assets/Facebook-Icon.svg'
import twitter from '../../../public/assets/Twitter-Icon.svg'
import instagram from '../../../public/assets/Instagram-Icon.svg'
import  linkedin from '../../../public/assets/LinkedIn-Icon.svg'
import youtube from '../../../public/assets/Youtube-Icon.svg'
import frame from '../../../public/assets/Frame 34123.svg'
import telsvg from '../../../public/assets/Component 3.svg'
import UaeRu from './uaeRu/UaeRu';
export default function FooterRu(){
    return(
        <>
            <footer className={styles.footer}>  
                 <div className={styles.uae}><UaeRu/></div>
                 <div className={styles.house}>
                    <div className={styles.roof}></div>
                       <div className={styles.bodydy}>
                    </div>
                </div>
                 <div className={styles.container}>
                    <div className={styles.footerCard}>
                        <div className={styles.card1}>
                            <Image src={frame3}  alt='' className={styles.frame3}/>
                            <p className={styles.p}>Комплексные решения для регистрации и поддержки бизнеса в ОАЭ.</p>
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
                                <p className={styles.nameS}>Разделы</p>
                                <p className={styles.smallP}>О нас</p>
                                <p  className={styles.smallP}>Услуги</p>
                                <p  className={styles.smallP}>Блог</p>
                                <p  className={styles.smallP}>FAQ</p>
                                <p  className={styles.smallP}>Контакты</p>
                            </div>
                            <div className={styles.catalogs}>
                                <p className={styles.nameS}>Рабочие часы</p>
                                <p className={styles.smallP}>С понедельника по пятницу с <br /> 8:30 до 17:30</p>
                                <p  className={styles.smallP}>Суббота 10:00 – 14:00</p>
                            </div>
                            <div className={styles.catalogs}>
                                <p className={styles.nameS}>Свяжитесь с нами</p>
                                <p className={styles.smallP}><Image src={frame} alt=''/>info.xyz@gmail.com</p>
                                <p  className={styles.smallP}><Image src={telsvg} alt=''/>+996 476-924</p>
                            </div>
                        </div>
                    </div>
                     <div className={styles.palochka}></div>
                     <p className={styles.text}> 2025 PRIME SETUP. Все права защищены.</p>
                 </div>
            </footer>
        </>
    )
}