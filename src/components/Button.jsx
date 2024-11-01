// eslint-disable-next-line react/prop-types
const Button = ({ name, isBeam = false, containerClass, href }) => {
  const baseClasses = `btn ${containerClass}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping" />
            <span className="btn-ping_dot" />
          </span>
        )}
        {name}
      </a>
    );
  }

  return (
    <button className={baseClasses}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
