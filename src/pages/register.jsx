import AuthLayout from "../Component/Layouts/AuthLayout";
import FormRegister from "../Component/Fragment/FormRegister";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
            <p className="text-sm mt-5 text-center">
              Don't have an account ? {" "}
              <Link to="/login" className="font-bold text-blue-600">
                Sign In
              </Link>
           </p>
        </AuthLayout>
    );
}

export default LoginPage;