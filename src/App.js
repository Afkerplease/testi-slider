import "./App.css";
import data from "./data";
import tanya from "./images/image-tanya.jpg";
import arrowleft from "./images/icon-prev.svg";
import arrowright from "./images/icon-next.svg";

function App() {
  return (
    <main className="  h-[100vh]        ">
      <div className=" container   bg-cyan-200  ">
        <div className=" mx-auto h-[500px] w-[390px] bg-no-repeat relative bg-[url('./images/pattern-bg.svg')]  bg-contain   bg-center   ">
          <img
            src={tanya}
            className=" w-[75%] shadow-2xl h-[62%]  left-[15%] top-[20%] absolute  "
            alt=""
          />
          <div className=" absolute  top-[77%] left-[40%] bg-white p-4 flex gap-8 rounded-full shadow-xl  ">
            <button>
              <img src={arrowleft} alt="" />{" "}
            </button>
            <button>
              <img src={arrowright} alt="" />{" "}
            </button>
          </div>
        </div>
        <div className=" bg-white mt-20 gap-4 bg-[url('./images/pattern-quotes.svg')] bg-no-repeat   bg-[center_top_-3rem]   flex flex-col items-center ">
          <p className=" mt-4 text-center">
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”
          </p>
          <h2>Tanya Sinclair</h2>
          <h3>UX Engineer</h3>
        </div>
      </div>
    </main>
  );
}

export default App;
