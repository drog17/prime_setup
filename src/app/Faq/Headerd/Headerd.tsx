import Link from 'next/link'
import styles from './Headerd.module.scss'
import frame3 from '../../../../public/assets/Frame 3 (1).svg'
import arrowPng from '../../../../public/assets/Arrow - Right 2.png'
import Image from 'next/image'
export default function Headerd() {
    return(
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link href="/"><Image src={frame3}  alt='' className={styles.frame3}/>
 </Link>
                   <div className={styles.catalogs}>
                       <Link className={styles.nodirection} href="/about"><li className={styles.li}>О нас</li></Link> 
                       <Link className={styles.nodirection} href="/services"><li  className={styles.li}>Услуги</li></Link>
                      <Link className={styles.nodirection} href="/blog"><li  className={styles.li}>Блог</li></Link>
                        <Link className={styles.nodirection} href="/Faq"><li  className={styles.li}>FAQ</li></Link>
                       <Link className={styles.nodirection} href="/Contacts"><li  className={styles.li}>Контакты</li></Link> 
                        <li className={styles.languages}>Ru <Image src={arrowPng} alt=''/></li>
                        <button className={styles.buttonLeav}>Оставить заявку</button>
                   </div>
                </div>
            </header>
    )
}