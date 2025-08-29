import Contacts from "./sections/Contacts/Contacts";
import FAQ from "./sections/faq/FAQ";
import FreeConsultation from "./sections/free/FreeConsultation";
import OurPartner from "./sections/partners/OurPartners";


export default function HomePage() {
  return (
    <>
    <FreeConsultation/>
    <OurPartner/>
    <FAQ/>
    <Contacts/>
    </>
  );
}
