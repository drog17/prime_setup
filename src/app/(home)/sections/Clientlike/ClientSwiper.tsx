"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"
import styles from "./Clientlike.module.scss"
import ReviewEn from "@/shared/Constants/lang/en/HomeEn/ReviewEn"
import ReviewRu from "@/shared/Constants/lang/ru/HomeRu/ReviewRu"
import { Review } from "@/shared/Constants/types"
import useLangStore from "@/store/useLangStore"

export default function ClientSwiper() {
  const {lang} = useLangStore();
  const reviews: Review[] = lang === "EN" ? ReviewEn: ReviewRu;

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={3} 
    >
      {reviews.map((review, i) => (
        <SwiperSlide key={i}>
          <div className={styles.box}>
            <div className={styles.div}></div>
            <h2>{review.name}</h2>
            <p>{review.text}</p>
            <div className={styles.Rating}>
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <Image
                    key={idx}
                    src={"/assets/1.svg"}
                    alt="Star"
                    width={28.46}
                    height={28.46}
                  />
                ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}