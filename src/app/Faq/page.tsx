import Herod from "./Hero/Hero";
import Poisk from "./sections/Search/Search";
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