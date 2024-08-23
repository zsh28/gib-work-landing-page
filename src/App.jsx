import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import ButtonWrapper from "./Components/Button";
import Testimonials from "./Components/Testmonials";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-[#3f267f] scrollbar-track-[#b091ff] h-screen">
      <div className="bg-[#8151fd] min-h-screen">
        <Navbar />
        <Header />
        <Card />
        <ButtonWrapper />
        <Experience />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
