import React from "react";

const Contact = () => {
  return (
    <div className="md:flex justify-between h-screen md:mt-40 mt-20 ">
      <div
        className="lg:h-full h-[600px] md:h-[600px] md:w-[48%] flex px-12 rounded-3xl items-end bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/contactImg.webp')` }}
      >
        <div className="text-white pb-8 font-bold">
          <p className=" text-5xl">open</p>
          <p className=" pl-6  text-5xl">doors</p>
          <p className="lg:w-[35%] md:w-[70%] py-4">
            Open Doors is a LIVE marketing community on Welcome, where you can
            have REAL conversations with peers and experts.
          </p>
          <button className="text-white underline underline-offset-8">
            Learn more
          </button>
        </div>
      </div>
      <div className="bg-[#f3efea] px-12 py-10 rounded-3xl md:mt-0 mt-6 md:w-[48%] lg:h-full md:h-[600px] h-[600px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-cente font-bold lg:text-5xl md:text-2xl">
              Contact <br /> us
            </p>
          </div>

          <div className="w-1/2">
            <hr className="bg-black" />
            <p className="text-center py-2 text-[10px] font-bold">
              Join thousands of marketing leaders who get the monthly edition
            </p>
            <hr />
          </div>
        </div>
        <p className="lg:w-[50%] md:w-[100%] pt-6 text-sm ">
          This is your direct line to our team, where your messages are valued
        </p>
        <input placeholder="Email" className="w-full py-4 px-3 mt-10" />
        <textarea placeholder="Message*" className="w-full mt-4 px-3" cols={40} rows={6} />

        <button className="w-full text-white bg-black py-4 mt-8">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
