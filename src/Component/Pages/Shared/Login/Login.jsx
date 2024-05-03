import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {

  const navigate = useNavigate(); 

  const handleLogin = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget); 
    
    const email = form.get('email'); 
    const password = form.get('password'); 
    e.target.reset();

    console.log(email, password);
    navigate('/')
  }



  return (
    <div>
      <div>
        {/* form  */}
        <div data-aos="zoom-in" data-aos-duration="1500" className="md:w-1/2 space-y-3  my-4 mx-auto">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-white text-sm btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">Don't have an Account ? Please <Link to={'/register'}><span className="btn-link font-bold">Register</span></Link></p>
          <p className="text-center text-xl">or</p>
          <div className="grid md:grid-cols-2 px-8 gap-3  mx-auto">
                <button className="w-full btn-outline btn"><FcGoogle className="text-2xl" />Login with Google</button>
                <button className="w-full btn-outline btn"><FaFacebook className="text-2xl text-blue-700" /> Login with Facebook</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
