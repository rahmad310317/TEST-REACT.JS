import Button from "../Element/Button";
import InputForm from "../Element/Input";

const FormLogin = () => {

   const handleLogin = (event) => {
    event.preventDefault();
    
    // setLocal storage
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    // Redirect to dashboard page after successful login.
    window.location.href = "/products"; 
   };

   const email = localStorage.getItem("email");

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        children="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email" />
      <InputForm
        children="password"
        type="password"
        placeholder="******"
        name="password" />
      <Button classname="blue-600 w-full"  type="submit">Login
      </Button>
    </form>
  )
}
export default FormLogin;