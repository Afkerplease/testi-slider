import "./App.css";
import { useState } from "react";
import jhon from "./images/image-john.jpg";
import tanya from "./images/image-tanya.jpg";
import arrowleft from "./images/icon-prev.svg";
import arrowright from "./images/icon-next.svg";

function App() {
  const [value, setvalue] = useState(1);
  if (value > 1) {
    setvalue(0);
  }
  if (value < 0) {
    setvalue(1);
  }

  const nextSlide = () => {
    setvalue(value + 1);
  };
  const PrevSlide = () => {
    setvalue(value - 1);
  };
  return (
    <main className="  h-[100vh] font-Inter  relative     ">
      <div className=" container md:grid md:grid-cols-2    ">
        <div className="  md:mt-20 lg:mt-0 lg:h-[850px] lg:w-[750px] md:h-[600px] md:w-[500px] order-1 mx-auto h-[500px] w-[390px] bg-no-repeat relative bg-[url('./images/pattern-bg.svg')]  bg-contain   bg-center   ">
          {value === 0 ? (
            <img
              src={tanya}
              className=" w-[75%] shadow-2xl h-[62%] lg:h-[70%] lg:top-[15%] lg:w-[80%] lg:left-[8%]   left-[15%] top-[20%] absolute  "
              alt=""
            />
          ) : (
            <img
              src={jhon}
              className=" w-[75%] shadow-2xl h-[62%]  left-[15%] top-[20%] absolute lg:h-[70%] lg:top-[15%] lg:w-[80%] lg:left-[8%]  "
              alt=""
            />
          )}
          <div className=" absolute  top-[77%] left-[40%] bg-white p-4 flex gap-8 rounded-full shadow-xl  ">
            <button onClick={PrevSlide}>
              <img src={arrowleft} alt="" />{" "}
            </button>
            <button onClick={nextSlide}>
              <img src={arrowright} alt="" />{" "}
            </button>
          </div>
        </div>
        <div className="  lg:items-start lg:ml-10  md:mt-[15rem] bg-white mt-10  bg-[url('./images/pattern-quotes.svg')] bg-no-repeat   bg-[center_top_-2rem] lg:bg-[center_top_-1rem]   ">
          <div className=" lg:absolute lg:w-[37%] lg:left-[14.5%]   lg:flex lg:flex-col lg:items-start flex flex-col items-center ">
            <p className=" lg:text-start lg:text-[32px] mt-8 text-center md:w-[90%]  w-[80%] font-[300] text-[22px]  text-DarkBlue  ">
              {value === 0
                ? `“ I’ve been interested in coding for a while but never taken the
              jump, until now. I couldn’t recommend this course enough. I’m now in
              the job of my dreams and so excited about the future. ”`
                : `“ If you want to lay the best foundation possible I’d recommend taking this course. 
              The depth the instructors go into is incredible. I now feel so confident about 
              starting up as a professional developer. ” `}
            </p>
            <div className=" lg:flex lg:items-center lg:justify-center lg:gap-2 ">
              <h2 className=" font-[700] text-DarkBlue mt-4 text-xl ">
                {value === 0 ? "Tanya Sinclair" : "John Tarkpor"}
              </h2>
              <h3 className=" font-[500] text-GrayishBlue lg:mt-4  ">
                {value === 0 ? "UX Engineer" : "Junior Front-end Developer"}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-no-repeat bg-[url('./images/pattern-curve.svg')] bg-top  w-[100%] h-[100px] absolute  bg-cover  bottom-0 md:h-[200px]  "></div>
    </main>
  );
}

export default App;
