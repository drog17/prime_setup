import Header from "@/widget/header/Header";
import Footer from "@/widget/footer/Footer";
import Heros from "./Onas/Heros/Heros";
import Prime from "./Onas/sections/Prime/Prime";
import Predprimial from "./Onas/sections/Predprinial/Predprimial";
import Team from "./Onas/sections/Team/Team";
import Mission from "./Onas/sections/Mission/Mission";
export default function About() {
    return (
        <>
            <Header />
            <Heros/>
            <Prime />
            <Mission />
            <Predprimial />
            <Team/>
            <Footer/>
        </>
    )
}