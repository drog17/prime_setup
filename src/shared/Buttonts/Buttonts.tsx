import styles from './Buttonts.module.scss'
import tgpng from '../../../public/assets/Telegram.png'
import Image from 'next/image';

export default function Buttonts() {
      return (
    <>
      <button className={styles.button}>
          <Image src={tgpng}  alt='' className={styles.tgpng}/> 
          <p className={styles.p}>Нужна помощь? 
            <br /> Свяжитесь с нами по чату</p>
      </button>
    </>
  )
}