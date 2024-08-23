const TaskCard = ({ icon, title, points, currencyIcon }) => {
    return (
      <div className="flex items-center justify-between p-4 rounded-lg shadow-md bg-white max-w-[800px]">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <img src={icon} alt="Task Icon" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </div>
        </div>
        <div className="flex items-center ml-4">
          <span className="text-[14px] font-semibold text-gray-700 mr-2">
            {points}
          </span>
          <img src={currencyIcon} alt="Currency Icon" className="w-4 h-4" />
        </div>
      </div>
    );
  };
  
  export default TaskCard;
  