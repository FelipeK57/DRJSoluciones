import Vectores from "../assets/servicebg.svg";
import DisplayImg from "../assets/image 1.svg";
import InternImg from "../assets/image 2.svg";
import SoftwareImg from "../assets/image.svg";
import CardService from "./CardService";

function Services() {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-cover -z-10 mask-gradient"
        style={{ backgroundImage: `url(${Vectores})` }}
      ></div>
      <article className="flex flex-col items-center justify-center gap-10 py-20">
        <h1 className="lg:text-6xl text-4xl font-bold py-10 text-slate-50">
          Lista de Servicios
        </h1>
        <div className="grid grid-cols-1 w-[70%] lg:w-[80%] lg:grid-cols-3 gap-8 py-10">
          <CardService
            imagen={DisplayImg}
            title="Reparación de pantalla"
            description="Reemplazo rápido y profesional de pantallas dañadas para que tu celular vuelva a lucir y funcionar como nuevo."
          />
          <CardService
            imagen={InternImg}
            title="Reparación partes internas"
            description="Solucionamos problemas internos como cámaras defectuosas, conectores, cambio de bateria y mucho mas."
          />
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
