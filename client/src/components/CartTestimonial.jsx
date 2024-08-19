import PropTypes from "prop-types";

/**
 * CartTestimonial component.
 * This component represents a testimonial card displaying name, service, and description.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.name - The name of the person who left the testimonial.
 * @param {string} props.description - The description of the testimonial.
 * @param {string} props.service - The service provided by the person.
 * @return {JSX.Element} - The CartTestimonial component.
 */
const CartTestimonial = ({ name, description, service }) => {
  return (
    /* The testimonial card wrapped in a div */
    <div className="flex flex-col gap-4 px-8 py-4 hover:bg-opacity-50 transition-all duration-200 bg-slate-500 items-center justify-center bg-opacity-10 rounded-lg">
      {/* The top section of the testimonial card displaying name, service */}
      <div className="flex flex-row items-center justify-start gap-4 w-full">
        <div className="flex flex-col justify-between">
          {/* The name of the person who left the testimonial */}
          <p className="lg:text-2xl text-xl font-bold text-slate-50">{name}</p>
          {/* The service provided by the person */}
          <p className="lg:text-base text-sm font-normal text-slate-200">
            {service}
          </p>
        </div>
      </div>
      {/* The description of the testimonial */}
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
