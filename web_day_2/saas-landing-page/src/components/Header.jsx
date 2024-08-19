/* eslint-disable react/no-unescaped-entities */
function Header() {
  return (
    <header className="bg-slate-100 ">
      <div className="container mx-auto pt-14 pb-5 lg:pt-28 md:pt-20 lg:pb-10  flex flex-col  lg:flex-row  gap-10 lg:gap-32 px-3 lg:px-0">
        <div className="dark:text-slate-800 flex-1 ">
          <span className="uppercase font-bold tracking-widest">
            Saas Website
          </span>
          <h1 className="lg:text-6xl text-5xl my-5 font-extrabold lg:w-[700px]">
            Stay connected with our cloud software
          </h1>
          <p className="text-slate-600 lg:w-[500px] my-5">
            A cloud application, or cloud app, is a software program where
            cloud-based and local components work together.
          </p>
          <div className="space-x-5 flex  items-center">
            <button className="btn bg-indigo-600 border-none hover:bg-indigo-800 text-white lg:px-8">
              <img src="../../images/portraiticon.png" className="w-9" alt="" />
              Contact us
            </button>
            <button className="btn bg-white border-none hover:bg-gray-200 text-slate-800">
              Create an account
            </button>
          </div>
          <img src="../../images/star.png" className="mt-10" alt="" />
          <p className="text-slate-800 my-5 font-medium text-lg lg:w-[500px]">
            "We highly recommend it to any business looking to improve their
            efficiency and profitability."
          </p>

          <p className="lg:mt-10">
            <span className="font-semibold">Rated 5/5</span> - from over 40
            reviews
          </p>
        </div>
        <div className="flex-1 relative">
          <img
            src="../../images/Frame-5.png"
            className="w-fit absolute lg:mt-64  lg:-ml-14 mt-40 -ml-8"
            alt=""
          />
          <button className="btn absolute lg:mt-[370px] lg:-ml-12 mt-64 bg-white border-none hover:bg-gray-200 text-slate-800 lg:px-6">
            <img src="../../images/right-icon.png" className="w-6" alt="" />
            24/7 customer service
          </button>
          <img
            src="../../images/Frame.png"
            className="lg:w-fit md:w-full"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
