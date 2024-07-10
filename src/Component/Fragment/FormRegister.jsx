import Button from "../Element/Button";
import InputForm from "../Element/Input";
const FormRegister = () => {
    return (
        <form action="" >
            <InputForm  
            children="Fullname" 
            type="text " 
            placeholder="Rahmadee" 
            name="username" />
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
          <InputForm 
            children="comfirm password" 
            type="password" 
            placeholder="******" 
            name="password"/>
          <Button className="w-full" color="blue-600">Register</Button>   
        </form>
    )
}
export default FormRegister;