import { useState } from "react";
import { NavLink, Link } from "react-router";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="flex w-full fixed top-0 items-end justify-between shadow-md bg-green-500">
        <div>
          <Link
            to="/"
            className="text-2xl text-green-500 font-mono font-extrabold inline-block my-4 ml-4 px-2 py-1 bg-white w-fit rounded-md drop-shadow-md"
            onClick={() => setNavOpen(false)}
          >
            mrld.me
          </Link>
        </div>
        <nav className="hidden sm:flex justify-center space-x-10 mx-auto">
          <NavLink
            className={({ isActive }) =>
              `navlink ${isActive ? "text-white" : "text-green-700"}`
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navlink ${isActive ? "text-white" : "text-green-700"}`
            }
            to="/gallery"
          >
            GALLERY
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navlink ${isActive ? "text-white" : "text-green-700"}`
            }
            to="/tools"
          >
            TOOLS
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navlink ${isActive ? "text-white" : "text-green-700"}`
            }
            to="/about"
          >
            ABOUT
          </NavLink>
        </nav>
        <div
          className="my-4 mr-4 px-2 py-2.5 bg-white space-y-1 rounded-md sm:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="block h-1 w-6 bg-green-500 rounded-sm"></span>
          <span className="block h-1 w-6 bg-green-500 rounded-sm"></span>
          <span className="block h-1 w-6 bg-green-500 rounded-sm"></span>
        </div>

        <div
          className={`fixed top-0 right-0 z-40 w-64 h-screen bg-white shadow-md ease-in-out duration-300 ${
            navOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden`}
        >
          <div className="m-2 p-2 w-fit" onClick={() => setNavOpen(false)}>
            <svg
              className="h-10 w-10 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <nav className="grid px-5 py-10 space-y-2 mx-auto">
            <NavLink
              className={({ isActive }) =>
                `navlink ${isActive ? "text-green-500" : "text-green-300"}`
              }
              to="/"
              onClick={() => setNavOpen(false)}
            >
              HOME
            </NavLink>
            <hr class="text-green-200" />
            <NavLink
              className={({ isActive }) =>
                `navlink ${isActive ? "text-green-500" : "text-green-300"}`
              }
              to="/gallery"
              onClick={() => setNavOpen(false)}
            >
              GALLERY
            </NavLink>
            <hr class="text-green-200" />
            <NavLink
              className={({ isActive }) =>
                `navlink ${isActive ? "text-green-500" : "text-green-300"}`
              }
              to="/tools"
              onClick={() => setNavOpen(false)}
            >
              TOOLS
            </NavLink>
            <hr class="text-green-200" />
            <NavLink
              className={({ isActive }) =>
                `navlink ${isActive ? "text-green-500" : "text-green-300"}`
              }
              to="/about"
              onClick={() => setNavOpen(false)}
            >
              ABOUT
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
