import Image from 'next/image'
import styles from './PanelAdmin.module.scss'
export default function PanelAdmin() {
  return (
    <div className={styles.panel}>
      <div className={styles.contend}>
        <h1>Панель администратора</h1>
        <div className={styles.foto}>
          <span>Иван</span>
          <Image src={"/icons/Frame 34364.svg"} alt='foto' width={80} height={80} />
        </div>
      </div>
    </div>
  )
}