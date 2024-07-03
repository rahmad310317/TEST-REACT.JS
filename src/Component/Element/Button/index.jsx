import React from "react";


const Button = (props) => {
    const {color, children} = props;
    return (
      <button class={`h-10 px-6 font-semibold rounded-md ${color} text-white`} type="submit">
      {children}
    </button>
    );
  }

export default Button;