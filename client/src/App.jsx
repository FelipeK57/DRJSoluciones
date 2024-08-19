import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

/**
 * App component.
 * This component renders the main layout of the website.
 * The main layout is composed of the hero section, the services section,
 * the testimonials section, the contact section, and the footer section.
 *
 * @returns {React.ReactElement} - The App component.
 */
function App() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Services Section */}
      <Services />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Contact Section */}
      <Contact />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
