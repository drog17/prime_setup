"use client"
import useLangStore from '@/store/useLangStore'
import Contacts2 from '../(home)/sections/Contacts/Contacts'
import Buttontg from '../(home)/sections/hero/buttontg/Buttontg'
import styles from '../ContactsPage/contact/Contact.module.scss'

const ContactEn={
    title: "We are ready to help you start a business in the UAE - just write to us.",
    text: "We are always in touch and happy to answer any questions."
}
const ContactRu={
    title: "Готовы помочь вам начать бизнес в ОАЭ — просто напишите нам.",
    text: "Мы всегда на связи и рады ответить на любые вопросы."
}

export default function Contact () {
const {lang,set}=useLangStore()
    return(
        <>
           <div className={styles.logo}></div>
               <div className={styles.heroInfo}>
                   <h1 className={styles.h1}>{lang==="EN" ? ContactEn.title : ContactRu.title}</h1>
                   <p className={styles.p}>{lang==="EN" ? ContactEn.text : ContactRu.text}</p>
               </div>
           <div className={styles.buttontg}><Buttontg/></div>
          <Contacts2/>
        </>
    )
}