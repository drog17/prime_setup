import Clientlike from "./sections/Clientlike/Clientlike";
import Ower from "./sections/Ower/Ower";
import Userfull from "./sections/Userfull/Userfull";
import Uslugi from "./sections/Uslugi/Uslugi";
import Whychoice from "./sections/Whychoice/Whychoice";
import Contacts from "./sections/Contacts/Contacts";
import FAQ from "./sections/faq/FAQ";
import FreeConsultation from "./sections/free/FreeConsultation";
import OurPartner from "./sections/partners/OurPartners";



export default function HomePage() {
  return (
    <>
      <Whychoice />
      <Ower />
      <Uslugi />
      <FreeConsultation />
      <OurPartner />
      <Clientlike />
      <Userfull />
      <FAQ />
      <Contacts />
    </>
  );
}
