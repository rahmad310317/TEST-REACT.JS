import AuthLayout from "../Component/Layouts/AuthLayout";
import FormLogin from "../Component/Fragment/FormLogin";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
           <FormLogin />           
        </AuthLayout>
    );
}

export default LoginPage;