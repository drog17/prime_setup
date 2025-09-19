"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "./Clientlike.module.scss"
import ClientSwiper from "./Swiper/ClientSwiper"
import ClientlikeRu from "@/shared/Constants/lang/ru/HomeRu/ClientlikeRu"
import ClientlikeEn from "@/shared/Constants/lang/en/HomeEn/ClientlikeEn"
import useLangStore from "@/store/useLangStore"

export default function Clientlike() {
  const { lang} = useLangStore()

  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState(0)

    function handleOpen(e: React.MouseEvent) {
    e.preventDefault()
    setIsOpen(true)
  }

    const handleClose = () => {
        setIsOpen(false)
        setRating(0)
    }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(lang === "EN" ? `Thank you for your feedback! Your rating:  ${rating}⭐️ `:`Спасибо за отзыв! Ваш рейтинг: ${rating}⭐️`)
    setIsOpen(false)
    setRating(0)
  }

  return (
    <section className={styles.section}>
      <h2>{lang === "EN" ? ClientlikeEn.title : ClientlikeRu.title}</h2>
      <div className={styles.page}>
        <div className={styles.logo}>
          <div className={styles.boxs}>
            <ClientSwiper />
          </div>

          <div className={styles.btn}>
            <a href="">
              <button onClick={handleOpen}>
                {lang === "EN" ? ClientlikeEn.btn : ClientlikeRu.btn}
              </button>
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
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="text" 
              placeholder={lang === "EN" ? ClientlikeEn.placeholder.input : ClientlikeRu.placeholder.input} 
              required />

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
                placeholder={lang==="EN" ? ClientlikeEn.placeholder.rextarea : ClientlikeRu.placeholder.textarea}
                required
              />

              <div className={styles.btn2}>
                <button
                  type="button"
                  className={styles.otmena}
                  onClick={handleClose}
                >
               {lang==="EN" ? ClientlikeEn.button : ClientlikeRu.button}
                </button>
                <button type="submit" className={styles.otpavit}>
             {lang==="EN" ? ClientlikeEn.buttonOp : ClientlikeRu.buttonOp}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}