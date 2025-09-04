import styles from './Buttontg.module.scss'
import tgpng from '../../../../../../public/assets/Telegram.png'
import Image from 'next/image';
function Buttontg() {
  return (
    <>
        <button className={styles.button}>
          <a href="https://t.me/idench">
          <Image src={tgpng}  alt='' className={styles.tgpng}/> 
          </a>
          <p className={styles.p}>Need help?<br/>Contact us by chat</p>
      </button>
    </>
  )
}

export default Buttontg
