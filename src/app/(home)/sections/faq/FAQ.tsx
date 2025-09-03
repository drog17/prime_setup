"use client";
import { useState } from "react";
import styles from "./faq.module.scss";
import Container from "@/shared/ui/Container";
import Image from "next/image";

const faqs = [
  { question: "Why should I start a business in Dubai?", answer: "Dubai offers a strategic location, tax advantages, modern infrastructure, and global business opportunities." },
  { question: "How do I set up a business in Dubai?", answer: "You need to choose a business activity, legal structure, register with the Department of Economic Development (DED) or Free Zone, and obtain necessary approvals." },
  { question: "What types of business licences are available in Dubai?", answer: "Commercial, Professional, and Industrial licenses are the main categories." },
  { question: "What are the main steps to set up a company in Dubai?", answer: "Choose your business activity, pick a company name, apply for initial approval, draft MOA, lease office space, and get the trade license." },
  { question: "How much does it cost to set up a business in Dubai?", answer: "The cost varies depending on the license type, location (mainland or free zone), and business activity. On average, from AED 15,000 to AED 50,000." },
  { question: "Can foreigners own 100% of their business in Dubai?", answer: "Yes, foreigners can now own 100% of their business in most sectors, especially in Free Zones and many Mainland activities." },
];

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
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <span className={styles.icon}>
                    {activeIndex === index ? "−" : "+"}
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
<Image src="/assets/Rectangle 1172.svg" alt='recta' height={40} width={40}/>
           </div>
           </div>
        </div>
      </Container>
    </section>
  );
}
