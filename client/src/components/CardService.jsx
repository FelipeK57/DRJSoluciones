import PropTypes from "prop-types";

const CardService = ({ imagen, title, description }) => {
  return (
    <div className="flex flex-col mx-auto w-[90%]">
      <img className="size-auto" src={imagen} alt="display repair" />
      <div className="bg-slate-500 flex flex-col h-full justify-center gap-4 bg-opacity-10 rounded-b-xl px-6 py-8">
        <p className="lg:text-3xl text-xl font-bold text-slate-50">{title}</p>
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
