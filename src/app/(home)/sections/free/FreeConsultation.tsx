"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./free.module.scss";
import Image from "next/image";
import step1Img from "../../../../../public/illustration-consultation.png";
import Container from "@/shared/ui/Container";
import useLangStore from "@/shared/Constants/useLangStore";

const steps = [
    {
        id: 1,
        title: "Free Consultation",
        text: "We begin with a personal consultation to understand your business vision and objectives. Our experts discuss the best options for your needs and provide clear guidance on the most suitable setup. You’ll receive all the information required to make decisions confidently and move forward with clarity.",
        image: step1Img,
    },
    {
        id: 2,
        title: "Free Consultation",
        text: "We begin with a personal consultation to understand your business vision and objectives. Our experts discuss the best options for your needs and provide clear guidance on the most suitable setup. You’ll receive all the information required to make decisions confidently and move forward with clarity.",
        image: step1Img,
    },
    {
        id: 3,
        title: "Free Consultation",
        text: "We begin with a personal consultation to understand your business vision and objectives. Our experts discuss the best options for your needs and provide clear guidance on the most suitable setup. You’ll receive all the information required to make decisions confidently and move forward with clarity.",
        image: step1Img,
    },
];
const FreeRu={
    title:"Как проходит открытие вашей компании — шаг за шагом",
    cardTitle:"Бесплатная консультация",
    text:"Мы начинаем с консультации, чтобы понять ваши цели и задачи. Обсуждаем, какие формы бизнеса подойдут именно вам, и подбираем оптимальный вариант для регистрации. Вы получите всю необходимую информацию для принятия решения."
}
const FreeEn={
    title:"How We Set Up Your Business: Step by Step"
}

export default function StepsSwiper() {
    const {lang,set}=useLangStore()
    return (
        <section className={styles.free}>
            <Container>
                <h2 className={styles.title}>{lang==="EN" ? FreeEn.title : FreeRu.title }</h2>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className={styles.swiper}>
                    {steps.map((step) => (
                        <SwiperSlide key={step.id} className={styles.slide}>
                            <div className={styles.content}>
                                <div className={styles.imageWrapper}>
                                    <Image src={step.image} alt={step.title} width={380} height={380} />
                                </div>
                                <div className={styles.textWrapper}>
                                    <h3>{lang==="EN" ? step.title : FreeRu.cardTitle}</h3>
                                    <p>{lang==="EN" ? step.text : FreeRu.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
}
