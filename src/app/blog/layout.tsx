
import Footer from "@/widget/footer/Footer";
<<<<<<< HEAD
import Header from "@/widget/header/Header";
=======
import { TbBackground } from "react-icons/tb";

>>>>>>> e24245d3c52d90ba9f3afba4cdbcbd78adc3b935

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
