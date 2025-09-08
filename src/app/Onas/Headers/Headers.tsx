import Image from 'next/image'
import styles from './Headers.module.scss'
import frame3 from '../../../../public/assets/Frame 3 (1).svg'
import arrowPng from '../../../../public/assets/Arrow - Right 2.png'
import Link from 'next/link'
import HeaderEn from '@/shared/Constants/lang/en/HeaderEn/HeaderEn'
import HeaderRu from '@/shared/Constants/lang/ru/HeaderRu/HeaderRu'

export default function Header() {
    return (
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