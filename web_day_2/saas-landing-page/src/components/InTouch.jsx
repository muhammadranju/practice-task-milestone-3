/* eslint-disable react/no-unescaped-entities */
function InTouch() {
  return (
    <section className="container mx-auto  lg:px-0 lg:pb-20 pb-32 lg:pt-2 px-3 lg:my-24">
      <div className="container mx-auto  lg:px-0 px-3 flex  relative flex-col lg:flex-row justify-center items-center my-10">
        <div className="mt-10 flex-1 space-y-7 relative">
          <h1 className="lg:text-5xl text-3xl font-extrabold lg:w-[500px] lg:leading-tight">
            Get in touch
          </h1>

          <div className="flex flex-col  lg:flex-row gap-4">
            <div
              className="flex flex-col lg:flex-row 
            items-center gap-3"
            >
              <img src="../../images/icon4.png" alt="" />
              <span>+ 381 9875 6231</span>
            </div>

            <div
              className="flex flex-col lg:flex-row 
            items-center gap-3"
            >
              <img src="../../images/icon5.png" alt="" />
              <span>mail@uifry.com</span>
            </div>
          </div>
          <div className=" text-sm flex  items-center gap-x-10 ">
            <span>
              <img src="../../images/star.png" alt="" />
            </span>
          </div>
          <p className="lg:w-[500px]">
            "We highly recommend it to any business looking to improve their
            efficiency and profitability."
          </p>

          <div className="space-x-3">
            <span> 4.8 / 5 </span> <span>-</span>
            <span className="text-sm"> From over 250 reviews</span>
          </div>
        </div>
        <img
          src="../../images/short-banner.png"
          className="absolute lg:ml-[1100px] lg:mt-0 mt-[500px] lg:w-fit"
          alt=""
        />
        <div className="bg-white p-10 rounded-xl lg:mt-0 mt-20 relative z-40  lg:mr-40 text-slate-800 space-y-4 ">
          <div className="flex lg:flex-row flex-col lg:gap-x-4">
            <div className="flex flex-col">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-5 bg-transparent border outline-none rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter email name"
                className="p-5 bg-transparent border outline-none rounded-xl"
              />
            </div>
          </div>
          <div>
            <label className="mb-2">Your message</label>
            <input
              type="text"
              placeholder="Enter your message"
              className="p-5 bg-transparent border outline-none rounded-xl w-full"
            />
          </div>
          <div className="flex items-center  gap-x-3">
            <input type="checkbox" className="checkbox" />
            <span> I agree to the privacy policy</span>
          </div>
          <input
            type="submit"
            className="p-5 bg-orange-400 cursor-pointer text-white opacity-70 rounded-xl w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default InTouch;
