import { collaborators } from "../Mockdata/data";

const Collaborators = () => {
  return (
    <div className="max-w-[1200px] w-full h-auto justify-center items-center text-center mx-auto px-4 mb-10">
      <h2 className="text-white font-bold text-[32px] mb-2 text-center">
        In Collaboration with
      </h2>
      <div className="text-white text-[20px] mb-10">
          Top Open Source initiatives
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="bg-white rounded-lg p-4 flex items-center shadow-lg">
            <img
              src={collaborator.logo}
              alt={`${collaborator.name} logo`}
              className="w-20 h-20 object-contain mr-4 rounded-full"
            />
            <div className="text-left">
              <h3 className="text-gray-800 font-semibold text-[20px] mb-2">
                {collaborator.name}
              </h3>
              <p className="text-gray-800 text-[16px]">
                {collaborator.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborators;
