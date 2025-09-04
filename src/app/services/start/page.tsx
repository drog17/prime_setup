import styles from './Start.module.scss'
import frame34209 from '../../../../public/assets/Frame 34209 (3).png'
import Image from 'next/image';
import ZapisatsaNaConsult from './ZapisatsaNaConsult/page'
import Footer from '@/widget/footer/Footer';
function page() {
  return (
    <>
      <section className={styles.startSectionContainer}>
            <Image src={frame34209}  alt='' className={styles.frame34209}/>
            <div className={styles.smallCont}>
              <h3 className={styles.bigSpan}>Готовы начать бизнес в ОАЭ?</h3>
              <p className={styles.smallSpan}>Оставьте заявку и получите бесплатную консультацию от нашего специалиста.</p>
              <ZapisatsaNaConsult/>
            </div>
      </section>
      <Footer/>
    </>
  )
}

export default page
