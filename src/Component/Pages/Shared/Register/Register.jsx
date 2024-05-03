import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const { createNewUser, githubLogin, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    let photo = form.get("photo");
    if (!photo) {
      photo =
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
    }

    const email = form.get("email");
    const password = form.get("password");
    e.target.reset();

    console.log(name, email, password);
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
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
          className="md:w-1/2   my-6 md:my-3 mx-auto"
        >
          <h2 className="md:text-5xl text-3xl my-3 font-bold text-center">
            Register
          </h2>
          <div className="grid md:grid-cols-2 px-8   gap-3">
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
          <p className="text-center text-xl mt-2">or</p>

          <form onSubmit={handleRegister} className=" px-8 py-0">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo (optional)"
                className="input input-bordered"
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-white text-sm btn-primary">
                Register
              </button>
            </div>
          </form>
          <p className="text-center my-1">
            Already have an Account ? Please
            <Link to={"/login"}>
              <span className="btn-link font-bold "> Log-in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
