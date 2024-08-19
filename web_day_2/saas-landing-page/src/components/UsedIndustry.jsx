function UsedIndustry() {
  return (
    <section className="container mx-auto lg:my-20 my-10 px-3 lg:px-0">
      <div className="text-center space-y-5">
        <h1 className="lg:text-3xl text-2xl font-extrabold">
          Used by industry leaders you know
        </h1>
        <p className="lg:w-[500px] text-slate-600 dark:text-slate-300  mx-auto">
          A cloud application, or cloud app, is a software program and local
          components work together
        </p>
        <img
          src="../../images/logo-banner-light.png"
          className="dark:block w-fit mx-auto"
          alt=""
        />
        <img
          src="../../images/logo-banner.png"
          className="dark:hidden w-fit mx-auto"
          alt=""
        />
      </div>

      <div className="lg:mt-24 mt-16 relative">
        <img
          src="../../images/Highlight-Effect-Line.png"
          className="absolute lg:ml-[730px] lg:-mt-16 ml-36 -mt-16"
          alt=""
        />
        <h1 className="lg:text-4xl text-2xl text-center w-[400px] mx-auto">
          Put the spotlight on the main features
        </h1>
        <div className="flex justify-center flex-col lg:flex-row items-center lg:gap-10 mt-10">
          <div className="text-center flex flex-col justify-center items-center flex-1 border p-2 rounded-lg lg:border-0">
            <div className="dark:bg-white mt-2 bg-slate-200 w-14 h-14 rounded-full flex justify-center items-center shadow-xl">
              <img src="../../images/icon1.png" alt="" />
            </div>
            <h3 className="mt-8 text-2xl">Fully responsive</h3>
            <p className="w-[300px] mx-auto mt-5">
              A cloud application, or cloud app, is a software program.
            </p>
            <a className="mt-6">
              Learn More
              <span className="border rounded-full px-2 py-1 ml-2 text-sm">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="text-center flex flex-col justify-center items-center flex-1 lg:mt-0 mt-4 border p-2 rounded-lg lg:border-0">
            <div className="dark:bg-white mt-2 shadow-xl bg-slate-200 w-14 h-14 rounded-full flex justify-center items-center">
              <img src="../../images/icon2.png" alt="" />
            </div>
            <h3 className="mt-8 text-2xl">Blazing Fast</h3>
            <p className="w-[300px] mx-auto mt-5">
              A cloud application, or cloud app, is a software program.
            </p>
            <a className="mt-6">
              Learn More
              <span className="border rounded-full px-2 py-1 ml-2 text-sm">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="text-center flex flex-col justify-center items-center flex-1 g:mt-0 mt-4 border p-2 rounded-lg lg:border-0">
            <div className="dark:bg-white mt-2 bg-slate-200  w-14 h-14 rounded-full flex justify-center items-center shadow-xl">
              <img src="../../images/icon3.png" alt="" />
            </div>
            <h3 className="mt-8 text-2xl">Multi layout template</h3>
            <p className="w-[300px] mx-auto mt-5">
              A cloud application, or cloud app, is a software program.
            </p>
            <a className="mt-6">
              Learn More
              <span className="border rounded-full px-2 py-1 ml-2 text-sm">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsedIndustry;
