import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Service from "./components/Services"
import Whychooseus from "./components/WhyChooseUs"
import Testimonial from "./components/Testimonials"
import Step from "./components/Step"
// import Payment from "./components/Payment"
// import Insurrence from "./components/Insurrence"
import Faqs from "./components/Faqs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"
import GoogleReview from "./components/GoogleReviews"
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Service/>
      <About/>
      
      <Whychooseus/>
      <Step/>
      <Testimonial/>
      <GoogleReview/>
      {/* <Payment/> */}
      {/* <Insurrence/> */}
      <Faqs/>
      <Contact/>
      <Footer/>
    </>
  );
}