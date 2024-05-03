import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    e.target.reset();

    console.log(name, email, password);
    navigate("/");
  };
  return (
    <div>
      <div >
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
            <button className="w-full btn-outline btn">
              <FcGoogle className="text-2xl" />
              Login with Google
            </button>
            <button className="w-full btn-outline btn">
              <FaFacebook className="text-2xl text-blue-700" /> Login with
              Facebook
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
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
