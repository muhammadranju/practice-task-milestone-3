function Footer() {
  return (
    <footer className="lg:ml-32 mt-16">
      <div className="footer items-center  p-10 container mx-auto ">
        <aside>
          <img src="../../images/logo.png" className="dark:hidden" alt="" />
          <img
            src="../../images/logo-light.png"
            className="hidden dark:block"
            alt=""
          />
        </aside>
        <nav className="flex flex-col justify-center lg:items-center ">
          <h6 className="text-xl font-medium">Find Us On Social Media:</h6>
          <ul className="flex gap-x-3">
            <li className="shadow-lg rounded-full">
              <img src="./images/facebook.png" alt="" />
            </li>
            <li className="shadow-lg rounded-full">
              <img src="./images/instagram.png" alt="" />
            </li>
            <li className="shadow-lg rounded-full">
              <img src="./images/twitter.png" alt="" />
            </li>
          </ul>
        </nav>

        <nav className="flex flex-col lg:items-center text-xl">
          <h6>We’re Always Happy To Help</h6>
          <a>uifry@gmail.com</a>
        </nav>
      </div>
      <aside className="flex flex-col py-10 justify-center items-center text-center px-3 lg:px-0">
        <span className="border-b  border-gray-300 mb-3 lg:w-[900px]"></span>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Uifry
          develop by{" "}
          <a target="_blank" href="https://muhammadranju.vercel.app/">
            Muhammad Ranju
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
