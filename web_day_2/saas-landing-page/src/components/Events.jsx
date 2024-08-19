function Events() {
  return (
    <section className="dark:text-slate-800 bg-slate-100 lg:py-32 py-16">
      <div className="container mx-auto  lg:px-0 px-3 flex flex-col lg:flex-row justify-center items-center">
        <div className="flex-1">
          <img src="../../images/Frame-4.png" className="w-fit" alt="" />
        </div>

        <div className="mt-10 flex-1 space-y-7 relative">
          <img
            src="../../images/idea-icon.png"
            className="absolute lg:-mt-5 lg:-ml-7 -mt-4 -ml-2"
            alt=""
          />
          <h1 className="lg:text-5xl text-3xl font-extrabold lg:w-[500px]">
            Where your events come together
          </h1>
          <p className="lg:w-[500px]">
            A cloud application, or cloud app, is a software program where
            cloud-based and local components work together.
          </p>
          <div className="space-x-4">
            <button className="btn bg-indigo-700 border-0 text-white hover:bg-indigo-800 lg:px-10">
              Learn More
            </button>
            <button className="btn lg:px-7 border-0 bg-white text-slate-700 hover:bg-stone-200">
              <span className="">
                <i className="fa-solid fa-play"></i>
              </span>
              Play showreel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
