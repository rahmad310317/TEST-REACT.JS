
const Button = (props) => {
    const {children} = props;
    return (
      <button class="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white w-full" type="submit">
        {children}
      </button>   
    );
  }

export default Button;