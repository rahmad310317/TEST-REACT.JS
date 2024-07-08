import Input from "./Input";
import Label from "./Label";

const inputForm = (props) => {
    const {label, name, placeholder, type} = props;
    return(
        <div className="mb-6">
            <Input  htmlFor={name}>{label}</Input>
            <Label name={name} type={type} placeholder={placeholder}/>
        </div>
    );
}

export default inputForm