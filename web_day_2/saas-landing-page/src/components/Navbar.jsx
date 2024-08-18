export function Navbar() {
  return (
    <nav className="navbar container mx-auto pt-7 pb-5">
      <div className=" mr-10 text-black dark:text-white ">
        <details className="dropdown relative z-40">
          <summary className="btn btn-ghost lg:hidden m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </summary>
          <ul className="menu dropdown-content bg-base-100 dark:bg-slate-900 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a className="font-bold text-red-500 underline">Home </a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>About</a>
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
            <a className="font-bold text-indigo-700 underline">Home </a>
          </li>

          <li>
            <a>Product</a>
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
        <a className="btn bg-transparent hover:bg-transparent hover:bg-border hover:border-indigo-700  lg:px-7 text-white">
          Sign
        </a>
        <a className="btn bg-indigo-700 lg:px-7 hover:bg-indigo-900  text-white">
          Started for free
        </a>
      </div>
    </nav>
  );
}
