import { SvgArrowIcon, SvgMenuIcon } from "../assets/SvgIcon";

export function Navbar() {
  return (
    <nav className="navbar container mx-auto lg:pt-7 lg:pb-5 pb-3 pt-3">
      <div className=" mr-10 text-black dark:text-white ">
        <details className="dropdown relative z-40">
          <summary className="btn btn-ghost lg:hidden m-1">
            <SvgMenuIcon />
          </summary>
          <ul className="menu dropdown-content bg-base-100 dark:bg-slate-900 rounded-box z-[1] w-52 p-2 shadow mt-3">
            <li>
              <a className="font-bold text-indigo-700 underline">
                Home
                <SvgArrowIcon />
              </a>
            </li>
            <li>
              <a>
                Product <SvgArrowIcon />
              </a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <button className="btn bg-indigo-700 lg:px-7 hover:bg-indigo-900  text-white">
                Sign
              </button>
            </li>
          </ul>
        </details>
        <a className="text-xl cursor-pointer">
          <img src="../../images/logo.png" className="dark:hidden" alt="" />
          <img
            src="../../images/logo-light.png"
            className="hidden dark:block"
            alt=""
          />
        </a>
      </div>

      <div className="navbar-start hidden lg:flex ">
        <ul className="menu menu-horizontal text-gray-900  dark:text-white px-1 text-lg font-medium">
          <li>
            <a className="font-bold text-indigo-700 underline">
              Home
              <SvgArrowIcon />
            </a>
          </li>

          <li>
            <a>
              Product
              <SvgArrowIcon />
            </a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <button className="btn bg-transparent hidden lg:block hover:bg-transparent border-none lg:px-7 text-white">
          Sign
        </button>
        <button className="btn bg-indigo-700 lg:px-7 hover:bg-indigo-900  text-white">
          Started for free
          <span className="-rotate-90">
            <SvgArrowIcon />
          </span>
        </button>
      </div>
    </nav>
  );
}
