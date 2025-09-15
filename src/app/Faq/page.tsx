import Herod from "./Herod/Herod";
import Poisk from "./sections/Poisk/Poisk";
import Header from "@/widget/header/Header";
import Contacts from "../(home)/sections/Contacts/Contacts";
import Footer from "@/widget/footer/Footer";

export default function Faq() {
    return (
        <>
            <Header />
            <Herod />
            <Poisk />
            <Contacts />
            <Footer />
        </>
    )
}