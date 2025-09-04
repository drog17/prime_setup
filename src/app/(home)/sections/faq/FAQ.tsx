"use client";
import { useState } from "react";
import styles from "./faq.module.scss";
import Container from "@/shared/ui/Container";
import Image from "next/image";
import faqs from '@/types/Faq/Faq'


export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Discover clear, concise answers to the most common questions about starting <br /> and registering a business in the UAE.
          </p>

          <div className={styles.accordion}>
            {faqs.map((item, index) => (
              <div key={index} className={styles.item}>
                <button
                  className={`${styles.question} ${activeIndex === index ? styles.active : ""}`}
                  onClick={() => toggleAccordion(index)}>
                  {item.question}
                  <span className={styles.icon}>
                    {activeIndex === index ? (
                      <div className={styles.arrowUp}>→</div>
                    ) : (
                      <div className={styles.def}>V</div>
                    )}
                  </span>
                </button>
                <div
                  className={`${styles.answer} ${activeIndex === index ? styles.show : ""
                    }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.readMore}>
            <button>Read all answers</button>
            <div className={styles.rectan}>
              <Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
