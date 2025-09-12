<<<<<<< HEAD
import Heros from "../Onas/Heros/Heros";
import Missiya from "../Onas/sections/Missiya/Missiya";
import Predprimial from "../Onas/sections/Predprinial/Predprimial";
import Prime from "../Onas/sections/Prime/Prime";
import Commanda from "../Onas/sections/Comanda/Comanda";
import Header from "@/widget/header/Header";
import Footer from "@/widget/footer/Footer";
=======

import Missiya from "./Onas/sections/Missiya/Missiya";
import Predprimial from "./Onas/sections/Predprinial/Predprimial";
import Prime from "./Onas/sections/Prime/Prime";
import Commanda from "./Onas/sections/Comanda/Comanda";
import Header from "@/widget/header/Header";
import Footer from "@/widget/footer/Footer";
import Heros from "./Onas/Heros/Heros";
>>>>>>> e24245d3c52d90ba9f3afba4cdbcbd78adc3b935
export default function About() {
    return (
        <>
            <Header />
            <Heros/>
            <Prime />
            <Missiya />
            <Predprimial />
            <Commanda />
<<<<<<< HEAD
            <Footer />
=======
            <Footer/>
>>>>>>> e24245d3c52d90ba9f3afba4cdbcbd78adc3b935
        </>
    )
}