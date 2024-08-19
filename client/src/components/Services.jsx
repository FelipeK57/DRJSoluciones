import Vectores from "/servicesvector.svg";
import DisplayImg from "../assets/image 1.svg";
import InternImg from "../assets/image 2.svg";
import SoftwareImg from "../assets/image.svg";
import CardService from "./CardService";

/**
 * Services component.
 * This component renders the services section of the website.
 * The section contains a background image, a title, and a grid of service cards.
 *
 * @returns {React.ReactElement} - The Services component.
 */
function Services() {
  // Return the JSX for the Services component.
  return (
    <section id="servicios" className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover -z-10 mask-gradient"
        style={{ backgroundImage: `url(${Vectores})` }}
      ></div>
      <article className="flex flex-col items-center justify-center gap-10 py-20">
        {/* Title */}
        <h1 className="flex flex-row gap-2 items-center justify-center lg:text-6xl text-4xl font-bold py-10 text-slate-50">
          Lista de Servicios
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-10 mt-2 hidden lg:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
            />
          </svg>
        </h1>
        {/* Grid of service cards */}
        <div className="grid grid-cols-1 w-[70%] lg:w-[80%] lg:grid-cols-3 gap-8 py-10">
          {/* Service card 1 */}
          <CardService
            imagen={DisplayImg}
            title="Reparación de pantalla"
            description="Reemplazo rápido y profesional de pantallas dañadas para que tu celular vuelva a lucir y funcionar como nuevo."
          />
          {/* Service card 2 */}
          <CardService
            imagen={InternImg}
            title="Reparación partes internas"
            description="Solucionamos problemas internos como cámaras defectuosas, conectores, cambio de bateria y mucho mas."
          />
          {/* Service card 3 */}
          <CardService
            imagen={SoftwareImg}
            title="Reparación de Software"
            description="Optimiza el rendimiento y la estabilidad de tu celular con una reparación de software completa y segura."
          />
        </div>
      </article>
    </section>
  );
}

export default Services;
