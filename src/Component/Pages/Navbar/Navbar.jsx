import { Link, NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { useContext, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { IoIosLogIn } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { user, userLogout } = useContext(AuthContext);
  let userImage =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

  if (user) {
    userImage = user.photoURL;
  }

  const navLinksEvnet = (
    <>
      <li>
        <NavLink to={"/upcoming"}>Upcoming Events</NavLink>
      </li>
      <li>
        <NavLink to={"/past"}>Past Events</NavLink>
      </li>
      <li>
        <NavLink to={"/featured"}>Featured Events</NavLink>
      </li>
    </>
  );

  const navLinksServices = (
    <>
      <li>
        <NavLink to={"/event-planning"}>Event Planning</NavLink>
      </li>
      <li>
        <NavLink to={"/venue-management"}>Venue Management</NavLink>
      </li>
      <li>
        <NavLink to={"/catering-service"}>Catering Services</NavLink>
      </li>
      <li>
        <NavLink to={"/entertainment"}>Entertainment</NavLink>
      </li>
      <li>
        <NavLink to={"/decoration"}>Decoration</NavLink>
      </li>
    </>
  );

  const navLinksMenu = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <details>
          <summary>Event</summary>
          <ul className="md:w-52">{navLinksEvnet}</ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="md:w-52">{navLinksServices}</ul>
        </details>
      </li>
    </>
  );

  return (
    <nav>
      <div className="navbar shadow-lg bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="lg:hidden">
              <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm md:hidden absolute duration-500 mt-3 z-10 p-2 shadow bg-base-100  w-52 ${
                !isOpen ? "-left-80 top-2" : "-left-2 top-11"
              }`}
            >
              {navLinksMenu}
            </ul>
          </div>
          <a className="md:tracking-wides  text-nowrap	tracking-wider	 text-2xl  md:text-4xl font-Pacifico">
            {/* Event Planer */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Event Planner",
                1000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={40}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu md:gap-5 md:text-lg z-10 menu-horizontal">
            {navLinksMenu}
          </ul>
        </div>


        {/* NavBar End // Login or Registration or LogOut Option  */}

        <div className="navbar-end flex items-center gap-1 text-xl md:gap-2">
          {user ? (
            <div>
              <div>
                <div
                  onClick={() => setShow(!show)}
                  className="md:hidden text-4xl"
                >
                  <div className="avatar online">
                    <div className="w-10 rounded-full">
                      <img src={userImage} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`md:flex items-center  gap-3 ${
                  show
                    ? "flex items-center top-16 bg-white  right-0 absolute z-10 p-8"
                    : "hidden static"
                }`}
              >
                <div className="hidden md:flex items-center gap-2">
                  <p className="text-xl">{user.displayName}</p>
                <div className="avatar  online ">
                  <div className="w-10 rounded-full">
                    <img src={userImage} />
                  </div>
                </div>
                </div>
                <div className="">
                <span className="text-xl md:hidden me-3">{user.displayName}</span>
                <span onClick={() => userLogout()}>

                  <AwesomeButton  size="small" type="primary">
                    Log Out
                  </AwesomeButton>


                </span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div
                  onClick={() => setShow(!show)}
                  className="md:hidden text-4xl"
                >
                  <IoIosLogIn />
                </div>
              </div>
              <div
                className={`md:flex items-center  gap-3 ${
                  show
                    ? "flex items-center top-14 bg-slate-300 right-3 absolute z-10 p-8"
                    : "hidden static"
                }`}
              >
                <Link to={"/login"}>
                  <AwesomeButton size="small" type="primary">
                    Log-in
                  </AwesomeButton>
                </Link>
                <span className="text-white md:text-black"> or </span>
                <Link to={"register"}>
                  <AwesomeButton size="small" type="primary">
                    Register
                  </AwesomeButton>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
