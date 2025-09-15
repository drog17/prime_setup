
import Header from "@/widget/header/Header";
import Footer from "@/widget/footer/Footer";
import Commanda from "./Onas/sections/Comanda/Comanda";
import Heros from "./Onas/Heros/Heros";
import Prime from "./Onas/sections/Prime/Prime";
import Missiya from "./Onas/sections/Missiya/Missiya";
import Predprimial from "./Onas/sections/Predprinial/Predprimial";
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