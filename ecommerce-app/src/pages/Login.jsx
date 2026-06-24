import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginDetails);
    localStorage.setItem("LoginDetails", JSON.stringify(loginDetails));
    toast.success("Login Successfully")
  };

  return (
    <div  className="flex justify-center items-center">
      <form action="" className="w-200" onSubmit={handleLogin}>
        <div className="row my-3">
          <h1 className="text-center bg-success-subtle my-5">Login Form</h1>
          <div className="col">
            <label htmlFor="">UserName: </label>
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Enter UserName"
              className="form-control"
              name="username"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row my-2">
          <div className="col">
            <label htmlFor="">Password</label>
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Login Password"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row my-5">
          <button className="btn btn-primary my-2" type="submit">Login</button>
          <button className="btn btn-warning" type="reset">Cancel</button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
