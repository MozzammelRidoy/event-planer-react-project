import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    e.target.reset();

    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  const handleGoolgeLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
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
