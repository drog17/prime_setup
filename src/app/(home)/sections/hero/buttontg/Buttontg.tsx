import styles from './Buttontg.module.scss'
import tgpng from '../../../../../../public/assets/Telegram.png'
import Image from 'next/image';
function Buttontg() {
  return (
    <>
      <button className={styles.button}>
          <Image src={tgpng}  alt='' className={styles.tgpng}/> 
          <p className={styles.p}>Need help?<br/>Contact us by chat</p>
      </button>
    </>
  )
}

export default Buttontg
