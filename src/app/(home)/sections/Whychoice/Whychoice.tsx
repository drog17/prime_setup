import Image from 'next/image'
import styles from './Whychoice.module.scss'
export default function Whychoice() {
    return (
        <section className={styles.Why}>
            <div className={styles.box}>
            <div className={styles.choice}>
                <h1>Why Choose Prime Setup for <br /> Business Setup in Dubai</h1>
                <p> Setting up a business in Dubai is a major step-Prime Setup makes it simple, secure, 
                    <br />and efficient. With over 15 years of experience, we have helped hundreds of
                    <br /> entrepreneurs and companies establish themselves in the UAE, guiding them through
                    <br /> every legal and administrative detail so they can focus on growth.</p>
            </div>
            <div className={styles.btn}>
           <button>Learn more about us</button>
           <div className={styles.rectan}>
<Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40}/>
           </div>
            </div>
                        </div>
        </section>
    )
}