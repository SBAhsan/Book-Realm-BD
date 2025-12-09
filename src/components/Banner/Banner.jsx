import React from "react";
import BookImage from "../../assets/open-flying-old-books.png";

const Banner = () => {
  return (
      <div className="hero bg-cyan-200 py-30">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BookImage}
            className="max-w-sm rounded-lg"
          />
          <div>
            <h1 className="text-6xl font-black">
          Welcome To <br /> <span className="text-cyan-600">Book Realm BD</span>
        </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="px-5 py-2 bg-amber-300 rounded-xl">Learn More</button>
          </div>
        </div>
      </div>
      );  
};

export default Banner;
