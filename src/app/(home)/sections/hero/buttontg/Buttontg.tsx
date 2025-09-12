"use client"
import styles from './Buttontg.module.scss'
import tgpng from '../../../../../../public/assets/Telegram.png'
import Image from 'next/image';
import useLangStore from '@/store/useLangStore';
function Buttontg() {
  const {lang} = useLangStore()
  return (
    <>
        <button className={styles.button}>
          <a href="https://t.me/metalabs23">
          <Image src={tgpng}  alt='' className={styles.tgpng}/> 
          </a>
          <p className={styles.p}>{lang==="EN" ? ButtontgEn.p : ButtontgRu.p}</p>
      </button>
    </>
  )
}
const ButtontgEn={
  p:'Need help?Contact us by chat'
}
const ButtontgRu={
  p:'Нужна помощь? Свяжитесь с нами по чату'
}


export default Buttontg
