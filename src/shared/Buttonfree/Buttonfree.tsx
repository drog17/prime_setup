"use client"
import useLangStore from '@/store/useLangStore'
export const Buttonfree = () => {
  const{lang}=useLangStore()
  return (
     <div>
      <button>{lang==="EN" ? btnfreeEn.btn : btnfreeRu.btn}</button>
    </div>
  )
}
const btnfreeEn={
  btn:"Book a Free Consultation"
}
const btnfreeRu={
  btn:"Бесплатная консультация"
}