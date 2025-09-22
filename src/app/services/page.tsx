import React from 'react'
import Header from '@/widget/header/Header'
import Spectr from './sections/spectr/Spectr'
import Start from './start/Start'
import Footer from '@/widget/footer/Footer'
import Hero from './sections/hero/Hero'
function page() {
  return (
    <>
      <Header/>
    <Hero/>
    <Spectr/>
    <Start/>
       <Footer/>
    </>
  )
}

export default page
