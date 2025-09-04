
import Contacts2 from '../(home)/sections/Contacts/Contacts'
import Buttontg from '../(home)/sections/hero/buttontg/Buttontg'
import styles from '../ContactsPage/contact/Contact.module.scss'

export default function Contact () {

    return(
        <>
           <div className={styles.logo}></div>
               <div className={styles.heroInfo}>
                   <h1 className={styles.h1}>We are ready to help you start a business in the UAE - just write to us.</h1>
                   <p className={styles.p}>We are always in touch and happy to answer any questions.</p>
               </div>
           <div className={styles.buttontg}><Buttontg/></div>
          <Contacts2/>
        </>
    )
}