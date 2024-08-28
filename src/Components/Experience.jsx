import React from "react";
import TaskCard from "./TaskCard";
import { tasks } from "../Mockdata/data";
import Marquee from "react-fast-marquee";

const Experience = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-10 mb-10">
        <div className="text-black font-bold text-[32px] mb-2">
          Earn rewards for your expertise
        </div>
        <div className="text-[#8151fd] text-[20px]">
          Discover opportunities and start earning.
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="max-w-[1200px] w-full rounded-lg">
          <Marquee
            gradient={true}
            gradientWidth={50}
            gradientColor="#8151fd"
            speed={50}
            direction="right"
            style={{ borderRadius: "8px" }}
            pauseOnHover={false}
            loop={0}
          >
            {tasks.map((task, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
                <TaskCard
                  icon={task.icon}
                  title={task.title}
                  points={task.points}
                  currencyIcon={task.currencyIcon}
                />
              </div>
            ))}
          </Marquee>
          <div className="mt-5"></div>
          <Marquee
            gradient={true}
            gradientWidth={50}
            speed={50}
            direction="left"
            style={{ borderRadius: "8px" }}
            gradientColor="#8151fd"
            pauseOnHover={false}
            loop={0}
          >
            {tasks.map((task, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
                <TaskCard
                  icon={task.icon}
                  title={task.title}
                  points={task.points}
                  currencyIcon={task.currencyIcon}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Experience;
