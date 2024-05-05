import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin, googleLogin, githubLogin, forgetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [errorStatus, setErrorStatus] = useState(null);

  // alert
  const showSwal = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      iconColor: 'green',
      title: `Your Login Success`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // forget password
  const getEmail = async () => {
    const { value: email } = await Swal.fire({
      title: "Forgot password ?",
      input: "email",
      inputLabel: "Don't Worry",
      inputPlaceholder: "Enter your email address",
      confirmButtonText: "Reset Request",
      confirmButtonColor :'#000000',
      
      // Tailwind CSS classes for button styling
    });
    console.log(email);
    if (email) {
      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: 'green',
        html: `<p className="text-xl text-center">Plese Check Your Email </p><p className="text-xl text-center">${email}</p>`,

        showConfirmButton: false,
        timer: 2000,
      });
      forgetPassword(email)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    e.target.reset();

    console.log(email, password);
    setErrorStatus(null);
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        setErrorStatus(null);
        showSwal();
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
    setErrorStatus("Invalid email or password. Please try again.");
  };

  const handleGoolgeLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        showSwal();
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        showSwal();
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        {/* form  */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="md:w-1/2 space-y-3  my-4 mx-auto"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-center">Log-in</h2>

          <form onSubmit={handleLogin} className="card-body py-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-2xl absolute top-12 right-3"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              <label className="label">
                <a
                  onClick={() => getEmail()}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            {errorStatus && (
              <p className="text-center my-2 text-red-500">{errorStatus}</p>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-outline text-white text-sm btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="text-center">
            Don't have an Account ? Please{" "}
            <Link to={"/register"}>
              <span className="btn-link font-bold">Register</span>
            </Link>
          </p>
          <p className="text-center text-xl">or</p>
          <div className="grid md:grid-cols-2 px-8 gap-3  mx-auto">
            <button
              onClick={handleGoolgeLogin}
              className="w-full btn-outline btn"
            >
              <FcGoogle className="text-2xl" />
              Login with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="w-full btn-outline btn"
            >
              <FaGithub className="text-2xl " /> Login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
