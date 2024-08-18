import PropTypes from "prop-types";

const CartTestimonial = ({ name, description, service }) => {
  return (
    <div className="flex flex-col gap-4 px-8 py-4  bg-slate-500 items-center justify-center bg-opacity-10 rounded-lg">
      <div className="flex flex-row items-center justify-start gap-4 w-full">
        <div className="flex flex-col justify-between">
          <p className="lg:text-2xl text-xl font-bold text-slate-50">{name}</p>
          <p className="lg:text-base text-sm font-normal text-slate-200">
            {service}
          </p>
        </div>
      </div>
      <p className="lg:text-base text-sm font-normal text-slate-200">
        {description}
      </p>
    </div>
  );
};

CartTestimonial.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

export default CartTestimonial;
