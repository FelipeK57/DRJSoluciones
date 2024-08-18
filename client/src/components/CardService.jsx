import PropTypes from "prop-types";

/**
 * CardService component.
 * This component renders a single service card with an image, title, and description.
 * The component is used in the Services component.
 * @param {object} props - The component props.
 * @param {string} props.imagen - The path to the image for the service card.
 * @param {string} props.title - The title for the service card.
 * @param {string} props.description - The description for the service card.
 * @returns {React.ReactElement} - The CardService component.
 */
const CardService = ({ imagen, title, description }) => {
  return (
    <div className="flex flex-col w-full my-auto">
      {/* The image for the service card */}
      <img src={imagen} alt="display repair" />
      <div className="bg-slate-500 flex flex-col justify-center gap-4 bg-opacity-10 rounded-b-xl px-6 py-8">
        {/* The title for the service card */}
        <p className="lg:text-2xl text-xl font-bold text-slate-50">{title}</p>
        {/* The description for the service card */}
        <p className="lg:text-base text-sm font-normal text-slate-200">
          {description}
        </p>
      </div>
    </div>
  );
};

CardService.propTypes = {
  imagen: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardService;
