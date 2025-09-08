"use client";
import { useState } from "react";
import styles from "./faq.module.scss";
import Container from "@/shared/ui/Container";
import Image from "next/image";
import faqs from '@/types/Faq/Faq'
import useLangStore from "@/shared/Constants/useLangStore";
const FaqsRu = {
  title: "Часто задаваемые вопросы",
  subtitle: "Ответы на самые популярные вопросы о регистрации бизнеса в ОАЭ.",
  question: 'Почему я должен начать бизнес в Дубае?',
  answer: "Коммерческие, профессиональные и промышленные лицензии — это основные категории."
}
const FaqsEn = {
  title: "Frequently Asked Questions",
  subtitle: "Discover clear, concise answers to the most common questions about starting and registering a business in the UAE."
}



export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const { lang, set } = useLangStore()

  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>{lang === "EN" ? FaqsEn.title : FaqsRu.title}</h2>
          <p className={styles.subtitle}>{lang === "EN" ? FaqsEn.subtitle : FaqsRu.subtitle}</p>

          <div className={styles.accordion}>
            {faqs.map((item, index) => (
              <div key={index} className={styles.item}>
                <button
                  className={`${styles.question} ${activeIndex === index ? styles.active : ""}`}
                  onClick={() => toggleAccordion(index)}>
                  {lang === "EN" ? item.question : FaqsRu.question}
                  <span className={styles.icon}>
                    {activeIndex === index ? (
                      <div className={styles.arrowUp}>→</div>
                    ) : (
                      <div className={styles.def}>V</div>
                    )}
                  </span>
                </button>
                <div
                  className={`${styles.answer} ${activeIndex === index ? styles.show : ""}`}>
                  <p>{lang === "EN" ? item.answer : FaqsRu.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.readMore}>
            <button>Read all answers
              <div className={styles.rectan}>
                <Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40} />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
