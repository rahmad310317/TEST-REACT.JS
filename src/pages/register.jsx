import AuthLayout from "../Component/Layouts/AuthLayout";
import FormRegister from "../Component/Fragment/FormRegister";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister />           
        </AuthLayout>
    );
}

export default RegisterPage;