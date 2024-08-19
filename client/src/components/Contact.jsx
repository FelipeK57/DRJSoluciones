import EndPage from "../assets/endpage.svg";
/**
 * Contact component.
 * This component renders the contact section of the website.
 * The contact section contains a background image, a heading,
 * a description, and a WhatsApp chat button.
 *
 * @returns {React.ReactElement} - The Contact component.
 */
function Contact() {
  return (
    // Main container for the contact section
    <main id="contacto" className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover -z-10"
        style={{ backgroundImage: `url(${EndPage})` }}
      ></div>
      {/* Container for the section content */}
      <section className="flex flex-col items-center justify-center gap-10 py-20">
        {/* Heading */}
        <h1 className="flex flex-row gap-2 items-center justify-center lg:text-6xl text-4xl font-bold py-10 text-slate-50">
          Contacto
        </h1>
        {/* Container for the description and WhatsApp chat button */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[70%] lg:w-[80%]">
          {/* Description container */}
          <div className="flex flex-col gap-8">
            {/* Description heading */}
            <h1 className="lg:text-2xl text-xl font-bold text-slate-50">
              ¿Tu celular presenta fallas o necesita una reparación urgente?
            </h1>
            {/* Description paragraph */}
            <p className="lg:text-base text-sm font-normal text-slate-200">
              Describe el problema principal que estás experimentando, como una
              pantalla rota, batería que no carga, o cualquier otro
              inconveniente.
            </p>
            <p className="lg:text-base text-sm font-normal text-slate-200">
              Proporciónanos algunos detalles adicionales, como el modelo de tu
              dispositivo y los síntomas específicos, para que podamos revisarlo
              y ofrecerte la mejor solución. Nuestro equipo de expertos está
              listo para ayudarte a recuperar el funcionamiento óptimo de tu
              teléfono.
            </p>
            {/* WhatsApp chat button container */}
            <div className="flex gap-6 flex-col">
              {/* WhatsApp chat button heading */}
              <h1 className="lg:text-2xl text-xl font-bold text-slate-50">
                Escribenos a nuestro Whatsapp
              </h1>
              {/* WhatsApp chat button */}
              <a
                href="https://api.whatsapp.com/send?phone=573135684165"
                target="_blank"
                className="px-6 flex items-center gap-4 py-4 font-bold w-fit text-lg text-slate-50 bg-slate-500 bg-opacity-40 rounded-lg border-2 border-slate-50
                hover:bg-slate-700 transition-all duration-200"
              >
                Enviar Mensaje
                {/* WhatsApp chat button icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Container for the location information */}
          <div className="flex flex-col gap-8">
            {/* Location information heading */}
            <h1 className="lg:text-2xl text-xl font-bold text-slate-50">
              Ubicación:
            </h1>
            {/* Location information iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.2884392188826!2d-76.29353952526793!3d3.520654896453624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a04df9e562475%3A0xdbb4a09b9ac03267!2sSuper%20Inter%20Sembrador!5e0!3m2!1sen!2sco!4v1724016411979!5m2!1sen!2sco"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg opacity-80 w-full h-[300px]"
            ></iframe>
          </div>
        </article>
      </section>
    </main>
  );
}
export default Contact;
