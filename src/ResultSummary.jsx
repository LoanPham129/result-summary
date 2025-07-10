import React from "react";
import ic_reaction from "./assets/images/icon-reaction.svg";
import ic_memory from "./assets/images/icon-memory.svg";
import ic_verbal from "./assets/images/icon-verbal.svg";
import ic_visual from "./assets/images/icon-visual.svg";

const ResultSummary = () => {
  const summary = [
    {
      icon: ic_reaction,
      title: "Reaction",
      score: 80,
      color: "bg-red-200 text-red-600",
    },
    {
      icon: ic_memory,
      title: "Memory",
      score: 92,
      color: "bg-yellow-200 text-yellow-600",
    },
    {
      icon: ic_verbal,
      title: "Verbal",
      score: 61,
      color: "bg-green-200 text-green-600",
    },
    {
      icon: ic_visual,
      title: "Visual",
      score: 72,
      color: "bg-purple-200 text-purple-600",
    },
  ];

  return (
     <div className="flex flex-col md:flex-row items-center justify-center mt-10 mx-auto bg-white shadow-2xl overflow-hidden rounded-3xl w-fit">
      {/* LEFT SIDE */}
      <div className="bg-blue-600 flex flex-col items-center justify-center pt-5 rounded-3xl text-white w-full">
        <h3 className="opacity-70 text-center text-2xl font-medium">Your Result</h3>
        <div className="flex flex-col items-center justify-center text-center w-40 h-40 rounded-full bg-gradient-to-b from-blue-800/70 to-blue-600/10 mx-auto my-10">
          <p className="font-bold text-7xl m-4">76</p>
          <p className="opacity-70">of 100</p>
        </div>
        <div className="flex flex-col text-center mb-5">
          <span className="font-bold text-xl">Great</span>
          <span className="opacity-70 px-6 mt-5">
            You scored higher than 65% of <br />
            the people who have taken <br /> these tests.
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="p-5 md:w-80">
        <h3 className="font-bold text-2xl mb-8">Summary</h3>
        <div>
          {summary.map((item) => (
            <div
              key={item.title}
              className={`${item.color} flex text-lg px-4 items-center justify-between p-3 rounded-xl mb-3`}
            >
              <div className="flex items-center gap-4">
                <img src={item.icon} alt={item.title} className="w-5 h-5" />
                <span className="font-medium">{item.title}</span>
              </div>
              <div className="flex ml-24 text-black">
                <span className="font-bold opacity-70">{item.score}</span>
                <span className="">/100</span>
              </div>
            </div>
          ))}
        </div>
        <button className="rounded-3xl bg-blue-950 text-white w-full p-3 font-semibold mt-5">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResultSummary;
