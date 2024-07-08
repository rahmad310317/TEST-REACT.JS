import React from "react";
import Button from "./Component/Element/Button";
import InputForm from "./Component/Element/Input/Input";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">
          Login
        </h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        <form action="" >
          <InputForm label="email" type="email" placeholder="example@gmail.com" name="email">
          </InputForm>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              Password
            </label>
            <input type="text" 
            className="text-sm border rounded w-full py-2 px-3 text-slat-700 placeholder: opacity-50"
            placeholder="******"
            />            
          </div>
          <Button>Login</Button>     
        </form>
      </div>
    </div>
  )
}

export default App;