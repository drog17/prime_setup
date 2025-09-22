"use client";
import { useState } from 'react';
import styles from './Spectr.module.scss';
import Image from 'next/image';
import polygon6 from '../../../../../public/assets/Polygon 6.png';
import polygon5 from '../../../../../public/assets/Polygon 5.png';
import polygon4 from '../../../../../public/assets/Polygon 4.png';
import useLangStore from '@/store/useLangStore';
import SpectrEn from '@/shared/Constants/lang/en/ServicesEn/SpectrEn';
import SpectrRu from '@/shared/Constants/lang/ru/ServicesRu/SpectrRu';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang } = useLangStore();

  const content = lang === "EN" ? SpectrEn : SpectrRu;
  const items = content.items;

  return (
    <section className={styles.spectrContainer}>
      <div className={styles.spectr}>
        <h2 className={styles.h2}>{content.title}</h2>
        <div className={styles.infoCatalog}>
          <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
              <div className={styles.indicator} style={{ top: `${activeIndex * 100}px` }} />
              {items.map((item, index) => (
                <div 
                  key={index}
                  className={`${styles.item} ${activeIndex === index ? styles.active : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.title}
                </div>
              ))}
            </aside>
            <main className={styles.content}>
              <Image src={polygon6} alt='polygon6' className={styles.polygon6}/>
              <Image src={polygon5} alt='polygon5' className={styles.polygon5}/>
              <Image src={polygon4} alt='polygon4' className={styles.polygon4}/>
              <div className={styles.card}>
                <h2 className={styles.h2Title}>
                  {items[activeIndex].number && (
                    <span className={styles.number}>{items[activeIndex].number}</span>
                  )}
                  {items[activeIndex].title}
                </h2> 
                <p className={styles.pContent}>{items[activeIndex].content}</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}