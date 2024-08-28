import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Experience from "./Components/Experience";
import ButtonWrapper from "./Components/Button";
import Testimonials from "./Components/Testmonials";
import Collaborators from "./Components/Collaborators";
import Partners from "./Components/Partners";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="scrollable-content">
      <div className="bg-gray-300 min-h-screen">
        <Navbar />
        <Header />
        <Card />
        <ButtonWrapper />
        <Experience />
        <Testimonials />
        <Collaborators />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}
