import "../styles/global.css";
import "../styles/font.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";


export const metadata = {
  title: "ReliaVet | Schedule Virtual Vet Appointment Online",
  description: "Paul",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"overflow-x-hidden"}>
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
