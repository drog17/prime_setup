"use client"
import styles from './Buttontg.module.scss'
import tgpng from '../../../../../../public/assets/Telegram.png'
import Image from 'next/image';
<<<<<<< HEAD
import useLangStore from '@/store/useLangStore';
function Buttontg() {
  const {lang} = useLangStore()
  return (
    <>
        <button className={styles.button}>
          <a href="https://t.me/metalabs23">
=======
import ButtonTgEn from '@/shared/Constants/lang/en/HomeEn/ButtonTgEn';
import ButtonTgRu from '@/shared/Constants/lang/ru/HomeRu/ButtonTgRu';
import useLangStore from '@/shared/Constants/useLangStore';
function Buttontg() {
  const {lang,set}=useLangStore()
  return (
    <>
        <button className={styles.button}>
          <a href="https://t.me/idench">
          <div className={styles.teleg}>
>>>>>>> e24245d3c52d90ba9f3afba4cdbcbd78adc3b935
          <Image src={tgpng}  alt='' className={styles.tgpng}/> 
          </div>
          </a>
          <p className={styles.p}>{lang==="EN" ? ButtonTgEn.title : ButtonTgRu.title}</p>
      </button>
    </>
  )
}

export default Buttontg
