const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white"
      type="button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
