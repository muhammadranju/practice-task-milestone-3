function TakeReady() {
  return (
    <section className="container mx-auto  lg:px-0 px-3 my-24">
      <div className="container mx-auto  lg:px-0 px-3 flex flex-col lg:flex-row justify-center items-center my-10">
        <div className="flex-1">
          <img src="../../images/Frame-2.png" className="w-fit" alt="" />
        </div>

        <div className="mt-10 flex-1 space-y-7 relative">
          <h1 className="lg:text-5xl text-3xl font-extrabold lg:w-[500px] lg:leading-tight">
            Ready to take your online business to the <br /> next level?
          </h1>
          <p className="lg:w-[500px]">
            A cloud application, or cloud app, is a software program where
            cloud-based and local components work together.
          </p>
          <div className=" text-sm flex  items-center gap-x-10 ">
            <span>
              <img src="../../images/star.png" alt="" />
              4.8 / 5 <br />
              From over 250 reviews
            </span>{" "}
            <span>
              <img src="../../images/star.png" alt="" />
              4.8 / 5 <br />
              From over 250 reviews
            </span>
          </div>
          <div className="space-x-4">
            <button className="btn bg-indigo-700 border-0 text-white hover:bg-indigo-800 lg:px-10">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto  lg:px-0 px-3 flex flex-col lg:flex-row-reverse justify-center items-center my-10">
        <div className="flex-1">
          <img src="../../images/Frame-3.png" className="w-fit" alt="" />
        </div>

        <div className="mt-10 flex-1 space-y-7 relative ">
          <img
            src="../../images/Vector.png"
            className="absolute lg:ml-96 ml-72 -mt-1"
            alt=""
          />

          <h1 className="lg:text-5xl text-3xl font-extrabold lg:w-[500px]">
            Stay connected with our cloud software
          </h1>
          <p className="lg:w-[500px]">
            A cloud application, or cloud app, is a software program where
            cloud-based and local components work together.
          </p>
          <span className="flex items-center gap-x-3">
            <img src="../../images/right-icon.png" alt="" /> Multi layout <br />
            template
          </span>
          <div className="border border-dashed tracking-widest lg:w-96 dark:border-slate-500 border-slate-800	"></div>
          <div className="space-x-4">
            <button className="btn bg-indigo-700 border-0 text-white hover:bg-indigo-800 lg:px-10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TakeReady;
