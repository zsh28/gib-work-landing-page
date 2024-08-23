import { FaArrowCircleRight } from "react-icons/fa";

const ButtonWrapper = () => {
  return (
    <div className=" min-h-[50px] flex items-center justify-center mb-10 mt-10">
      <NeumorphismButton />
    </div>
  );
};

const NeumorphismButton = () => {
  return (
    <button
      className={`
        px-4 py-2 rounded-lg w-[200px] justify-center text-lg font-medium 
        flex items-center gap-2 
        text-[#8151fd] bg-white
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        
        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
    >
      <FaArrowCircleRight />
      <span>Get Started</span>
    </button>
  );
};

export default ButtonWrapper;
