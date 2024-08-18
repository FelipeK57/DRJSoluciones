import HeroImage from "../assets/heroimage.svg";
import Header from "./Header";
/**
 * HeroSection component.
 * This component renders the hero section of the website.
 * The hero section contains a background image, a header and a section
 * with a title, a paragraph and a button.
 *
 * @returns {React.ReactElement} - The HeroSection component.
 */
function HeroSection() {
  return (
    <main id="inicio" className="relative h-screen">
      {/* The header component is rendered here */}
      <Header />

      {/* The section with the title, paragraph and button is rendered here */}
      <section className="flex items-center justify-center h-3/4">
        {/* The background image is rendered here */}
        <div
          className="absolute inset-0 bg-cover bg-center -z-10 mask-gradient"
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>

        {/* The content of the section is rendered here */}
        <div className="flex flex-col items-center justify-center text-center gap-9 w-2/4">
          {/* The title is rendered here */}
          <h1 className="lg:text-6xl text-4xl font-bold text-slate-50">
            Reparación profesional de celulares
          </h1>

          {/* The paragraph is rendered here */}
          <p className="lg:text-3xl text-2xl font-normal text-slate-200">
            Rápido,confiable y a precios accesibles.
          </p>

          {/* The button is rendered here */}
          <button className="px-5 py-4 font-bold text-xl text-slate-50 bg-slate-500 bg-opacity-40 rounded-lg border-2 border-slate-50">
            Realiza una cotización
          </button>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
