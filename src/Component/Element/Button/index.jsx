const Button = (props) => {
  const { children, 
          classname, 
          type, 
          onClick = () => {} } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md bg-${classname} text-white`} 
      type={type}
      onClick={ () => onClick() }
      > 
      {children}
    </button>
  );
};

export default Button;
