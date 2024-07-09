import Input from "./Input";
import Label from "./Label";
const inputForm = (props) => {
    const {children, name, placeholder, type} = props;
    return(
        <div className="mb-6">
         <Label htmlFor={name}> {children} </Label>
         <Input name={name} type={type} placeholder={placeholder}></Input>
        </div>
    );
}

export default inputForm