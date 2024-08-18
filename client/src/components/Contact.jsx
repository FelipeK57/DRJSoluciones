import EndPage from "../assets/endpage.svg";
function Contact() {
  return (
    <main id="contacto" className="relative">
      <div
        className="absolute inset-0 bg-cover -z-10"
        style={{ backgroundImage: `url(${EndPage})` }}
      ></div>
      <section className="flex flex-col items-center justify-center gap-10 py-20">
        <h1 className="flex flex-row gap-2 items-center justify-center lg:text-6xl text-4xl font-bold py-10 text-slate-50">
          Contacto
        </h1>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-[70%] lg:w-[80%]">
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-2xl text-xl font-bold text-slate-50">
              ¿Tu celular presenta fallas o necesita una reparación urgente?
            </h1>
            <p className="lg:text-base text-sm font-normal text-slate-200">
              Describe el problema principal que estás experimentando, como una
              pantalla rota, batería que no carga, o cualquier otro
              inconveniente. Proporciónanos algunos detalles adicionales, como
              el modelo de tu dispositivo y los síntomas específicos, para que
              podamos revisarlo y ofrecerte la mejor solución. Nuestro equipo de
              expertos está listo para ayudarte a recuperar el funcionamiento
              óptimo de tu teléfono.
            </p>
            <h1 className="lg:text-2xl text-xl font-bold text-slate-50">
              Escribenos a nuestro Whatsapp
            </h1>
            <button className="px-10  py-4 font-bold w-fit text-xl text-slate-50 bg-slate-500 bg-opacity-40 rounded-lg border-2 border-slate-50">
              Enviar Mensaje
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-2xl text-xl font-bold text-slate-50">
              Ubicación:
            </h1>
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
