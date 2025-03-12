import { useState ,useContext } from "react";
import { DataContext } from "../DownloadSection";
const LeftSideBar = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const { showLeft, setShowLeft , fetchSubjects } = useContext(DataContext);
  const departments = [
    {name:"General" , key:"IT"},
    {name:"Software Engineering",key:"SE"},
    {name:"Computer Science",key:"CS"},
    {name:"Information System",key:"IS"},
    {name:"Artificial Intelligence",key:"AI"},
  ];

  return (
    <div
      className={` w-[100%] lg:w-[25%] bg-transparent text-white py-4 space-y-4 lg:border-r  lg:block relative ${
        showLeft ? "block" : "hidden"
      }`}
    >
      <h2 className="text-lg font-semibold pt-2 pb-4 border-b border-white text-left px-4">
        Department
      </h2>
      <button
        onClick={() => setShowLeft(false)
        }
        className="absolute top-0 right-2 px-4 py-2  text-white rounded-full  bg-red-500  hover:bg-red-600 transition lg:hidden "
      >
        close
      </button>
      <div className="flex flex-col space-y-2 px-4">
        {departments.map((department) => (
          <button
            key={department.name}
            onClick={() => {setSelectedDepartment(department.name);fetchSubjects(department.key); setShowLeft(false)}}
            className={`w-full text-left p-2 rounded-lg transition-all duration-300 
              ${
                selectedDepartment === department.name
                  ? "bg-[#1e293b] text-white" 
                  : "bg-transparent text-gray-300 hover:bg-gray-800"
              }`}
          >
            {department.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
