import React from "react";

const Home = () => {
  return (
    <div className="w-fit h-fit  relative z-10 left-[35vw] top-[20vh]">
        {/* <div className="hero-overlay bg-black"></div> */}
      {/* <div
        className="hero min-h-screen w-[100vw] relative"
        
        ></div> */}
        <div className="hero-content text-center text-neutral-content w-fit h-fit">
            <div className="max-w-md ">
                <h1 className="mb-5 text-6xl text-white/70 font-bold " style={{ opacity: 1 }}>Hello there</h1>
                <p className="mb-5 text-lg text-white/70 font-semibold " style={{ opacity: 1 }}>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                et a id nisi.
                </p>
                <button className="btn btn-primary text-white rounded-xl p-1 hover:bg-gray-500/50" style={{ opacity: 1 }}>Get Started</button>
            </div>
        </div>
      </div>
    // </div>
  );
};

export default Home;
