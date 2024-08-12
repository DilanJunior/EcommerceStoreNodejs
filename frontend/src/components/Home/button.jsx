const ButtonHover = (props) => {
  const { text, icon, onclick, className } = props;
  return (
    <button
      onClick={onclick}
      className={`flex gap-3 items-center m-0 font-bold py-2 px-4 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-500 before:transition-all before:duration-500 before:ease-out hover:before:w-0 hover:text-black text-opacity-50 hover:text-opacity-100 transform transition-transform duration-500`}
    >
      <span className="transform transition-transform duration-500 hover:translate-x-1">
        {text}
      </span>
      {icon && (
        <span className="transform transition-transform duration-500 hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};


export default ButtonHover;
