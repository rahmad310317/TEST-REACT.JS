import { Link } from "react-router-dom";

const AuthLayout =  (props) =>  {
    const {title, children, type} = props;
    return (
        <div className="flex justify-center min-h-screen items-center ">
            <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">
            {title}
            </h1>
            <p className="font-medium text-slate-500 mb-8">
            Welcome, Please enter your details
            </p>
            {children}
            <p className="text-sm mt-5 text-center">
                {type === 'login' ? "Don't Have an account " : "Already have an account ? "}
               
               {type === 'login' && (
                  <Link to="/register" className="font-bold text-blue-600">
                  Sign Up
                  </Link>
               )}

                {type === 'register' && (
                  <Link to="/login" className="font-bold text-blue-600">
                  Sign In
                  </Link>
               )}            
                </p>      
            </div>
      </div>
    )
}

export default AuthLayout;