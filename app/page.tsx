import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Service from "./components/Services"
import Whychooseus from "./components/WhyChooseUs"
import Testimonial from "./components/Testimonials"
import Step from "./components/Step"
import Payment from "./components/Payment"
import Insurrence from "./components/Insurrence"
import Faqs from "./components/Faqs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About/>
      <Service/>
      <Whychooseus/>
      <Step/>
      <Testimonial/>
      <Payment/>
      <Insurrence/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </>
  );
}