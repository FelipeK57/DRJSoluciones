import CardTestimonial from "./CartTestimonial";
import Testimonio1 from "../assets/imgtestimonio.svg";

/**
 * This component renders the testimonials section of the website.
 * The section contains a background image, a title, and a grid of testimonial cards.
 *
 * @returns {React.ReactElement} - The Testimonials component.
 */
function Testimonials() {
  return (
    <main id="testimonios" className="relative">
      <section className="flex flex-col items-center justify-center gap-10 py-20">
        <h1 className="lg:text-6xl text-4xl font-bold py-10 text-slate-50">
          Testimonios
        </h1>

        {/* The grid of testimonial cards is rendered here */}
        <article className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10 w-[70%] lg:w-[80%] py-10">
          {/* The first testimonial card is rendered here */}
          <div className="flex flex-col gap-4 px-8 py-4 row-span-2 bg-slate-500 items-center hover:bg-opacity-50 transition-all duration-200 justify-center bg-opacity-10 rounded-lg">
            <div className="flex flex-row items-center justify-start gap-4 w-full">
              {/* The image for the testimonial card is rendered here */}
              <img
                className="hidden size-14 xl:size-20 xl:block"
                src={Testimonio1}
                alt="display repair"
              />

              {/* The content of the testimonial card is rendered here */}
              <div className="flex flex-col justify-between">
                <p className="lg:text-2xl text-xl font-bold text-slate-50">
                  Carmen S.
                </p>
                <p className="lg:text-xl text-sm font-normal text-slate-200">
                  Cambio de bateria y pantalla
                </p>
              </div>
            </div>
            <p className="lg:text-lg text-sm font-normal text-slate-200">
              “Mi teléfono necesitaba una batería nueva y una pantalla
              reemplazada. El técnico hizo un trabajo excelente en ambos.
              Explicó todo el proceso, y el teléfono ahora funciona como nuevo.
              El servicio fue rápido y el precio razonable. Estoy muy satisfecho
              con el resultado y lo recomendaría sin dudarlo.”
            </p>
          </div>

          {/* The second testimonial card is rendered here */}
          <CardTestimonial
            name={"Lucía R."}
            service={"Reparación partes internas"}
            description={
              "“Pensé que mi celular estaba perdido, pero lo revivieron. Reemplazaron las partes internas dañadas, y ahora funciona mejor que nunca. ¡Muy recomendados!”"
            }
          />

          {/* The third testimonial card is rendered here */}
          <CardTestimonial
            name={"Ana T."}
            service={"Reparación de software"}
            description={
              "“Mi celular estaba lento y con errores, pero después del servicio, parece nuevo. ¡Gran trabajo!”"
            }
          />

          {/* The fourth testimonial card is rendered here */}
          <CardTestimonial
            name={"Mariana S."}
            service={"Reparación partes internas"}
            description={
              "“El equipo diagnosticó y reparó el daño interno de mi celular rápidamente. La atención fue de primera.”"
            }
          />

          {/* The fifth testimonial card is rendered here */}
          <CardTestimonial
            imagen={Testimonio1}
            name={"Esteban M."}
            service={"Reparación de software"}
            description={
              "“Excelente atención, solucionaron todos los problemas de software que tenía en mi móvil. Lo recomiendo al 100%.”"
            }
          />
        </article>
      </section>
    </main>
  );
}


export default Testimonials;
