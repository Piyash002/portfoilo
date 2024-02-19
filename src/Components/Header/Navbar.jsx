import { Link } from "react-router-dom";

const Navbar = () => {
    const menubar = (
      <div className=" lg:flex lg:gap-x-14 border-blue-950  justify-around ">
        <Link>
          <li>About me</li>
        </Link>

        <Link>
          <li>Experiance</li>
        </Link>
        <Link>
          <li>Projects</li>
        </Link>
        <Link>
          <li>Blog</li>
        </Link>
        <Link>
          <li>Contact</li>
        </Link>
      </div>
    );
    return (
      <div>
        <div className="navbar bg-slate-100 shadow-xl bg-opacity-40">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content 
                mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
            {menubar}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Tune to Program</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
          {menubar}
            </ul>
          </div>
      
        </div>
      </div>
    );
};

export default Navbar;