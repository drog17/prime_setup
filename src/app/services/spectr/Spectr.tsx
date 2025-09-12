"use client";
import { useState } from 'react';
import styles from './Spectr.module.scss'
import Image from 'next/image';
import polygon6 from '../../../../public/assets/Polygon 6.png'
import polygon5 from '../../../../public/assets/Polygon 5.png'
import polygon4 from '../../../../public/assets/Polygon 4.png'

const items = [
  {
    number:'1.',
    title: 'Регистрация компаний в ОАЭ',
    content: 'Помогаем зарегистрировать бизнес в любой юрисдикции: Mainland, Free Zone или Offshore. Консультируем, подготавливаем документы и полностью сопровождаем процесс до получения регистрационного сертификата.'
  },
  {
    number:'2.',
    title: 'Открытие банковских счетов',
    content: 'Помогаем зарегистрировать бизнес в любой юрисдикции: Mainland, Free Zone или Offshore. Консультируем, подготавливаем документы и полностью сопровождаем процесс до получения регистрационного сертификата.'
  },
  {
    number:'3.',
    title: 'Получение лицензий',
    content: 'Подбираем подходящую лицензию, готовим документы и взаимодействуем с органами.'
  },
  {
    number:'4.',
    title:"Виртуальные офисы и коворкинги",
    content:"Помогаем зарегистрировать бизнес в любой юрисдикции: Mainland, Free Zone или Offshore. Консультируем, подготавливаем документы и полностью сопровождаем процесс до получения регистрационного сертификата."
  },
  {
    number:'5.',
    title:"Налоговое консультирование",
    content:"Подбираем подходящую лицензию, готовим документы и взаимодействуем с органами."
  },
  {
    number:'6',
    title:"Бухгалтерское сопровождение",
    content:"взаимодействуем Подбираем подходящую лицензию, готовим документы и взаимодействуем с органами."
  },
  {
    number:'7.',
    title:"Визы для инвесторов и сотрудников",
    content:"взаимодействуем Подбираем подходящую лицензию, готовим документы и взаимодействуем с органами."
  },
  {
    number:'8.',
    title:"Полное сопровождение бизнеса",
    content:"взаимодействуем Подбираем подходящую лицензию, готовим документы и взаимодействуем с органами."
  }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.spectrContainer}>
      <div className={styles.spectr}>
        <h2 className={styles.h2}>Полный спектр услуг для запуска и развития бизнеса в ОАЭ</h2>
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