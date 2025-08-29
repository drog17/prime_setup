import Image from 'next/image'
import styles from './Uslugi.module.scss'

export default function Uslugi() {
    return (
        <section className={styles.uslugi}>
<div className={styles.box}>
 <h1>Services that cover everything from 
    <br />incorporation to operating businesses</h1>
<p>You can choose an individual service or entrust us with a turnkey solution. We 
    <br />adapt to your goals and budget.</p>
</div>
<div className={styles.boxs}>
<div className={styles.box1}>
    <div className={styles.burger}>
<Image src={"/assets/Frame 34092.svg"} alt='Frame' width={90} height={90}/>
</div>
<span>Business setup in the UAE</span>
</div>
<div className={styles.box1}>
    <div className={styles.cart}>
<Image src={"/assets/Component 1 (7).svg"} alt='Frame' width={90} height={90}/>
</div>
<span className={styles.span}>Bank Account Opening</span>
</div>
<div className={styles.box1}>
    <div className={styles.meda}>
<Image src={"/assets/Frame 34092 (1).svg"} alt='Frame' width={90} height={73}/>
</div>
<span className={styles.span}>License Acquisition</span>
</div>
<div className={styles.box1}>
    <div className={styles.cart}>
<Image src={"/assets/Frame 34092 (2).svg"} alt='Frame' width={90} height={90}/>
</div>
<span>Virtual Offices and Coworking Spaces</span>
</div>
</div>



<div className={styles.boxs2}>
<div className={styles.box2}>
    <div className={styles.burger}>
<Image src={"/assets/Frame 34092 (3).svg"} alt='Frame' width={90} height={90}/>
</div>
<span className={styles.span}>Tax Consulting</span>
</div>
<div className={styles.box2}>
    <div className={styles.cart}>
<Image src={"/assets/Frame 34092 (4).svg"} alt='Frame' width={90} height={90}/>
</div>
<span className={styles.span}>Accounting Support</span>
</div>
<div className={styles.box2}>
    <div className={styles.passport}>
<Image src={"/assets/Frame 34092 (5).svg"} alt='Frame' width={90} height={90}/>
</div>
<span className={styles.span}>Investor and Employee Visas</span>
</div>
<div className={styles.box2}>
    <div className={styles.cart}>
<Image src={"/assets/Component 1 (8).svg"} alt='Frame' width={90} height={90}/>
</div>
<span className={styles.span}>Full Business Support</span>
</div>
</div>

<div className={styles.btn}>
   <a href=""> <button>Check out our services</button></a>
               <div className={styles.rectan}>
<Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40}/>
           </div>
</div>
        </section>
    )
}