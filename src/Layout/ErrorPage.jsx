import { Link, useNavigate, useRouteError } from "react-router-dom";
import Navbar from "../Component/Pages/Navbar/Navbar";
import errorImage from "../assets/imaga/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="relative">
          <div className="">
            <img className="w-100" src={errorImage} alt="" />
          </div>
          <div  className="absolute top-0 left-0 w-full h-full flex md:space-y-3  bg-black bg-opacity-20 text-white flex-col justify-center items-center text-center">
            <h1 data-aos="zoom-in" data-aos-duration="1500" className="md:text-6xl text-4xl font-bold">Oops!</h1>
            <p data-aos="zoom-in" data-aos-duration="1500" className="md:text-8xl text-6xl font-bold font-Ubuntu">
              <i>{error.status || error.status}</i>
            </p>
            <p className="text-xl">
              Page <i>{error.statusText || error.message}</i>
            </p>
            <p className="md:text-2xl text-xl">
              Sorry, an unexpected error has occurred.
            </p>
            <div className="md:mt-8 w-3/5 md:w-3/12 flex justify-between gap-3 items-center">
              <div data-aos='zoom-in-right' data-aos-duration="2000"  >
                <button
                  className=" md:px-10 md:py-4 px-4 py-1 md:text-xl text-white bg-slate-500 btn-outline"
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </button>
              </div>

              <div data-aos='zoom-in-left' data-aos-duration="2000" >  
                <Link to={"/"}>
                  <button className=" md:px-10 md:py-4 px-4 py-1 md:text-xl text-white bg-slate-500 btn-outline">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="max-w-screen-2xl w-full mx-auto p-3 md:sticky bottom-0 absolute border-t bg-base-200 text-base-content border-base-300">
          <div className="footer  flex items-center justify-between ">
            <aside className="items-center grid-flow-col">
              <img
                className="w-12 h-12 rounded-full"
                src="https://i.ibb.co/nwnScB7/2212image-1700032725-524-12.png"
                alt=""
              />
              <p>
                Develop By | <br />
                Mozzammel Ridoy
              </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="grid grid-flow-col gap-4">
                <a href="https://github.com/MozzammelRidoy">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@MozzammelRidoy">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/MozzammelRidoyAR">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ErrorPage;
