import HeroImage from "../assets/heroimage.svg";
import Header from "./Header";

function HeroSection() {
  return (
    <main className="relative h-screen">
      <Header />
      <section className="flex items-center justify-center h-3/4">
        <div
          className="absolute inset-0 bg-cover bg-center -z-10 mask-gradient"
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>

        <div className="flex flex-col items-center justify-center text-center gap-9 w-2/4">
          <h1 className="lg:text-6xl text-4xl font-bold text-slate-50">
            Reparación profesional de celulares
          </h1>
          <p className="lg:text-3xl text-2xl font-normal text-slate-200">
            Rápido,confiable y a precios accesibles.
          </p>
          <button className="px-5 py-4 font-bold text-xl text-slate-50 bg-slate-500 bg-opacity-40 rounded-lg border-2 border-slate-50">
            Realiza una cotización
          </button>
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
