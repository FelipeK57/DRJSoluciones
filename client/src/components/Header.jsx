import { useState } from "react";
/**
 * Header component for the website.
 * Contains the logo, navigation links and a button for mobile view.
 */
function Header() {
  // State to track if the mobile menu is open or not
  const [open, setOpen] = useState(false);

  /**
   * Handler function for the button click event.
   * Toggles the open state.
   */
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="flex flex-row py-6 lg:text-xl text-base font-bold items-center max-w-[95%] mx-auto">
      {/* Logo */}
      <div className="flex grow justify-start text-center">
        <p className="px-5 py-4 bg-slate-200 rounded-lg">DRJSoluciones</p>
      </div>
      {/* Navigation links */}
      <nav className="hidden lg:block">
        <ul className="flex gap-12 text-slate-50">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#testimonios">Testimonios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      {/* Button for mobile view */}
      <div className="relative p-2">
        <button onClick={handleClick} className="lg:hidden block">
          {open ? (
            // Close icon for mobile view
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-14 bg-red-600 bg-opacity-40 ${
                open && "bg-opacity-80"
              } p-2 rounded-lg border-2 border-slate-50 text-slate-50 animate-fade-in-bg`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Menu icon for mobile view
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`size-14 bg-slate-500 bg-opacity-40 p-2 rounded-lg border-2 border-slate-50 text-slate-50`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        {open && (
          // Mobile menu for smaller screens
          <div className="lg:hidden absolute text-xl mt-2 right-2 bg-slate-500 bg-opacity-75 rounded-lg p-4 z-50 animate-fade-in-bg">
            <ul className="flex flex-col gap-4 p-2 text-slate-50">
              <li className="hover:text-black transition-all duration-200">
                <a href="#inicio">Inicio</a>
              </li>
              <li className="hover:text-black transition-all duration-200">
                <a href="#servicios">Servicios</a>
              </li>
              <li className="hover:text-black transition-all duration-200">
                <a href="#testimonios">Testimonios</a>
              </li>
              <li className="hover:text-black transition-all duration-200">
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
