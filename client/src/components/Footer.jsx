/**
 * Footer component.
 * This component renders the footer of the website.
 * It contains the logo, social media links and a paragraph
 * with a copyright notice.
 *
 * @returns {React.ReactElement} - The Footer component.
 */
function Footer() {
  return (
    <footer className="w-full bg-slate-500 bg-opacity-10 p-10 flex flex-col gap-4 font-bold text-lg">
      {/* The logo is rendered here */}
      <div className="flex flex-col gap-8 py-6 items-center">
        <div className="flex grow justify-start text-center">
          <p className="px-5 py-4 bg-slate-200 rounded-lg">DRJSoluciones</p>
        </div>
        {/* The social media links are rendered here */}
        <div className="flex gap-12 text-slate-50">
          <a
            href="https://www.instagram.com/drjsoluciones?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573135684165"
            target="_blank"
          >
            Whatsapp
          </a>
        </div>
      </div>
      {/* The copyright notice is rendered here */}
      <div className="flex flex-col text-center gap-2 text-sm text-slate-200 opacity-30">
        <p>Palmira, Valle del Cauca</p>
        <p>¡No esperes más para tener tu celular como nuevo!</p>
        <p>©2024. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
