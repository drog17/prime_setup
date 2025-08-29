import Image from 'next/image'
import styles from './Clientlike.module.scss'
import ClientSwiper from './ClientSwiper'
export default function Clientlike() {
    return (
<section className={styles.section}>
<h1>Successes shared by our clients</h1>
<div className={styles.page}>
    <div className={styles.logo}>
    <div className={styles.boxs}>
        <ClientSwiper/>
{/* <div className={styles.box}>
    <div className={styles.div}>
        </div>
    <h2>page k.</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever
         since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem</p>
<div className={styles.Rating}>
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
</div>
</div>
<div className={styles.box}>
    <div className={styles.div}>
        </div>
    <h2>page k.</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever
         since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem</p>
<div className={styles.Rating}>
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
</div>
</div>
<div className={styles.box}>
    <div className={styles.div}>
        </div>
    <h2>page k.</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever
         since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the 
          release of Letraset sheets containing Lorem</p>
<div className={styles.Rating}>
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
<Image src={"/assets/1.svg"} alt='Star' width={28.46} height={28.46} />
</div>
</div> */}

    </div>
    {/* <div className={styles.pager}>
        <div className={styles.page1}></div>
         <div className={styles.page2}></div>
          <div className={styles.page2}></div>
           <div className={styles.page2}></div>
            <div className={styles.page2}></div>
    </div> */}
    <div className={styles.btn}>
<a href=""><button>Leave a review</button></a>
           <div className={styles.rectan}>
<Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40}/>
           </div>
    </div>
    </div>
</div>
</section>
    )
}