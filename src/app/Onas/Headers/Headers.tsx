import Image from 'next/image'
import styles from './Headers.module.scss'
import frame3 from '../../../../public/assets/Frame 3 (1).svg'
import arrowPng from '../../../../public/assets/Arrow - Right 2.png'
import Link from 'next/link'

export default function Header() {
    return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <Link href="/"><Image src={frame3}  alt='' className={styles.frame3}/>
 </Link>
                   <div className={styles.catalogs}>
                        <li className={styles.li}>О нас</li>
                        <li  className={styles.li}>Услуги</li>
                        <li  className={styles.li}>Блог</li>
                        <li  className={styles.li}>FAQ</li>
                        <li  className={styles.li}>Контакты</li>
                        <li className={styles.languages}>Ru <Image src={arrowPng} alt='ada'/></li>
                        <button className={styles.buttonLeav}>Оставить заявку</button>
                   </div>
                </div>
            </header>
    )
}