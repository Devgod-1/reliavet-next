import Navbar from "@/components/Navbar";
import Image from "next/image";
import HomePage from "./home.page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
