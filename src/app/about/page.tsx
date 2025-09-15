import Header from "@/widget/header/Header";
import Footer from "@/widget/footer/Footer";
import Heros from "./Heros/Heros";
import Prime from "./sections/Prime/Prime";
import Predprimial from "./sections/Predprinial/Predprimial";
import Team from "./sections/Team/Team";
import Mission from "./sections/Mission/Mission";
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