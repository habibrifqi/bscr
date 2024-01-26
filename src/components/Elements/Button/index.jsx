const Buttons = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children = "btn0", color = "purple" } = props;
    const className = `h-10 px-6 font-semibold rounded-md bg-${color}-600 text-white`;
  
    return (
      <button className={className} type="submit">
        {children}
      </button>
    );
  };

export default Buttons