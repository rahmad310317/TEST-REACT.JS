import Button from "../Element/Button";
import InputForm from "../Element/Input";
const FormLogin = () => {
    return (
        <form action="" >
          <InputForm  
            children="Email" 
            type="email" 
            placeholder="example@gmail.com" 
            name="email" />
          <InputForm 
            children="password" 
            type="password" 
            placeholder="******" 
            name="password"/>
          <Button>Login</Button>     
        </form>
    )
}
export default FormLogin;