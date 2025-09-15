'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Addstate.module.scss'
import AddNewState from '../AddNewState/AddNewState'
import Published from '../Published/Published'
export default function Addstate() {
  const [open, setOpen] = useState(false)
const [openPubl, setOpenPubl] = useState(false)
  return (
    <div className={styles.add}>
      <div className={styles.btn}>
        <div className={`${styles.addstate} ${open ? styles.active : ''}`}>
          <Image src={open ? "/icons/add.svg" : "/icons/add (1).svg"} alt='add' width={30} height={30} />
          <button onClick={() =>{setOpen(true)
            setOpenPubl(false)
          }}>Добавить статью</button>
        </div>
        <div className={`${styles.publisher} ${openPubl ? styles.active : ''}`}>
          <Image src={openPubl ? "/icons/Publisher (1).svg" : "/icons/Publisher.svg"} alt='publisher' width={30} height={30}/>
          <button onClick={()=>{
            setOpenPubl(true)
            setOpen(false)
          }}>Опубликовано</button>
        </div>
      </div>


      {open && <AddNewState onClose={() => setOpen(false)} />}
              {openPubl && <Published/>}
    </div>
  )
}