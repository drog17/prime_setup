import styles from './Buttonts.module.scss'
import tgpng from '../../../public/assets/Telegram.png'
import Image from 'next/image';

export default function Buttonts() {
      return (
    <>
      <button className={styles.button}>
        <a className={styles.a} href="https://t.me/idench">
          <Image src={tgpng}  alt='' className={styles.tgpng}/> 
          </a>
          <p className={styles.p}>Нужна помощь? 
            <br /> Свяжитесь с нами по чату</p>
      </button>
    </>
  )
}