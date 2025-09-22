import Header from "@/widget/header/Header";
import Footer from "@/widget/footer/Footer";
import Prime from "./sections/Prime/Prime";
import Predprimial from "./sections/Predprinial/Predprimial";
import Team from "./sections/Team/Team";
import Mission from "./sections/Mission/Mission";
import Hero from "./Hero/Hero";
export default function About() {
    return (
        <>
            <Header />
            <Hero/>
            <Prime />
            <Mission />
            <Predprimial />
            <Team />
            <Footer/>
        </>
    )
}