
// import Header from "@/widget/header/Header";
import Header from '../../widget/header/Header'
import Footer from "@/widget/footer/Footer";
import { TbBackground } from "react-icons/tb";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="detailtHeader"/>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
