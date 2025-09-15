"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "./Clientlike.module.scss"
import ClientSwiper from "./ClientSwiper"
import useLangStore from '@/store/useLangStore'
import Container from "@/shared/ui/Container"


export default function Clientlike() {
    const { lang } = useLangStore()

    const [isOpen, setIsOpen] = useState(false)
    const [rating, setRating] = useState(0)

    const handleOpen = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
        setRating(0)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Спасибо за отзыв! Ваш рейтинг: ${rating}⭐`)
        setIsOpen(false)
        setRating(0)
    }

    return (
        <section className={styles.section}>
            <Container>
                <h2>{lang === "EN" ? ClientlikeEn.title : ClientlikeRu.title}</h2>
                <div className={styles.page}>
                    <div className={styles.logo}>
                        <div className={styles.boxs}>
                            <ClientSwiper />
                        </div>

                        <div className={styles.btn}>
                            <a href="">
                                <button onClick={handleOpen}>{lang === "EN" ? ClientlikeEn.btn : ClientlikeRu.btn}</button>
                            </a>
                            <div className={styles.rectan}>
                                <Image
                                    src="/assets/Rectangle 1172.svg"
                                    alt="recta"
                                    height={40}
                                    width={40}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className={styles.modalOverlay} onClick={handleClose}>
                        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.icons}>
                                <Image
                                    src="/assets/Frame 3.jpg"
                                    alt="recta"
                                    width={313}
                                    height={126.6}
                                />
                            </div>

                            {/* <button className={styles.close} onClick={handleClose}>
              ✖️
            </button> */}
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <input type="text" placeholder="Введите ваше имя" required />


                                <div className={styles.rating}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Image
                                            key={star}
                                            src={star <= rating ? "/assets/1.svg" : "/assets/1.jpg"}
                                            alt="rating"
                                            width={67}
                                            height={67}
                                            onClick={() => setRating(star)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    ))}
                                </div>

                                <textarea
                                    placeholder="Поделитесь своим мнением о нашем сервисе"
                                    required
                                />

                                <div className={styles.btn2}>
                                    <button
                                        type="button"
                                        className={styles.otmena}
                                        onClick={handleClose}
                                    >
                                        Отмена
                                    </button>
                                    <button type="submit" className={styles.otpavit}>
                                        Отправить
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    )
}
const ClientlikeEn = {
    title: "Successes shared by our clients",
    btn: "Leave a review"
}
const ClientlikeRu = {
    title: "Успехи, которыми делятся наши клиенты",
    btn: "Оставить отзыв"
}
