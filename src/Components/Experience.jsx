import TaskCard from "./TaskCard";
import { tasks } from "../Mockdata/data";

const Experience = () => {
  // Duplicate the task data to create a seamless loop
  const doubledTasks = [...tasks, ...tasks];

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-10 mb-10">
        <div className="text-white font-bold text-[32px] mb-2">
          Earn rewards for your expertise
        </div>
        <div className="text-white text-[20px]">
          Discover opportunities and start earning.
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="scroll-container">
          <div className="scroll-content">
            {doubledTasks.map((task, index) => (
              <TaskCard
                key={index}
                icon={task.icon}
                title={task.title}
                points={task.points}
                currencyIcon={task.currencyIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
