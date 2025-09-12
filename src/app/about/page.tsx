
import Missiya from "./Onas/sections/Missiya/Missiya";
import Predprimial from "./Onas/sections/Predprinial/Predprimial";
import Prime from "./Onas/sections/Prime/Prime";
import Commanda from "./Onas/sections/Comanda/Comanda";
import Header from "@/widget/header/Header";
import Footer from "@/widget/footer/Footer";
import Heros from "./Onas/Heros/Heros";
export default function About() {
    return (
        <>
            <Header />
            <Heros/>
            <Prime />
            <Missiya />
            <Predprimial />
            <Commanda />
            <Footer/>
        </>
    )
}