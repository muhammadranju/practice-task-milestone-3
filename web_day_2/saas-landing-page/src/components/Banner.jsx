function Banner() {
  return (
    <section
      className="container flex flex-col lg:flex-row justify-center
     items-center mx-auto px-3 lg:px-0 rounded-xl gap-x-10 pt-10  bg-indigo-700"
    >
      <div className="flex-1 lg:ml-20 space-y-10">
        <h1 className="lg:text-5xl text-3xl font-extrabold">
          Stay connected with <br /> our cloud software
        </h1>
        <div className="flex  lg:flex-row  items-center gap-x-6">
          <span className="flex items-center gap-x-2">
            <img src="../../images/right-icon-color.png" alt="" />
            Responsive design
          </span>
          <span className="flex items-center gap-x-2">
            <img src="../../images/right-icon-color.png" alt="" />
            Extra perk
          </span>
        </div>
        <button className="btn lg:px-10 bg-orange-400 border-0 text-white hover:bg-orange-600">
          <img
            src="../../images/portraiticon-2.png"
            className="w-8 mr-2"
            alt=""
          />
          Contact us
        </button>
      </div>
      <div className="relative z-40">
        <img
          src="../../images/woman.png"
          className="w-fit lg:mr-20 relative z-40"
          alt=""
        />
        <img
          src="../../images/overimage.png"
          className="absolute lg:ml-[363px] -mt-[255px] z-10"
          alt=""
        />
      </div>
    </section>
  );
}

export default Banner;
