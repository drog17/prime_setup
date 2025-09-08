import Heros from "../Onas/Heros/Heros";
import Missiya from "../Onas/sections/Missiya/Missiya";
import Predprimial from "../Onas/sections/Predprinial/Predprimial";
import Prime from "../Onas/sections/Prime/Prime";
import Commanda from "../Onas/sections/Comanda/Comanda";
import FooterRu from "@/widget/footer/FooterRu";
import Header from "@/widget/header/Header";
export default function About() {
    return (
        <>
            <Header />
            <Heros />
            <Prime />
            <Missiya />
            <Predprimial />
            <Commanda />
            <FooterRu />
        </>
    )
}