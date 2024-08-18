function Footer() {
  return (
    <footer className="w-full bg-slate-500 bg-opacity-10 p-10 flex flex-col gap-4 font-bold text-lg">
      <div className="flex flex-col gap-8 py-6 items-center">
        <div className="flex grow justify-start text-center">
          <p className="px-5 py-4 bg-slate-200 rounded-lg">DRJSoluciones</p>
        </div>
        <div className="flex gap-12 text-slate-50">
          <a href="https://www.facebook.com/" target="_blank">
            Facebook
          </a>
          <a href="">Instagram</a>
          <a href="">Whatsapp</a>
        </div>
      </div>
      <div className="flex flex-col text-center gap-2 text-sm text-slate-200 opacity-30">
        <p>Palmira, Valle del Cauca</p>
        <p>¡No esperes más para tener tu celular como nuevo!</p>
        <p>©2024. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
