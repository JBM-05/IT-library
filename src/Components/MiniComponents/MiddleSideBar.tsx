import { DataContext } from "../DownloadSection";
import { useContext } from "react";

const MiddleSideBar = () => {
  const {
    showLeft,
    showRight,
    setShowLeft,
    loading,
    subjects,
    selectedDepartment,
    selectedSubject,
    fetchFiles,
    setShowRight
  } = useContext(DataContext);

  return (
    <div
      className={`bg-transparent lg:w-[30%] w-[100%]  overflow-y-auto scrollbar-hidden lg:border-r py-4  text-white space-y-4 relative lg:block ${
        showLeft || showRight ? "hidden " : "block"
      }`}
    >
      <h2 className="text-lg font-semibold pt-2 pb-4 border-b border-white text-left px-4 ">
        Courses
      </h2>
      <button
        onClick={() => setShowLeft(true)}
        className="absolute top-0 right-2 px-4 py-2 text-white rounded-full bg-blue-500 hover:bg-blue-600 transition lg:hidden"
      >
        filter
      </button>
      <div className="px-4">
        {selectedDepartment && subjects.length > 0 ? (
          <ul>
            {subjects.map((subject) => (
              <li
                key={subject.$id}
                className={`w-full text-left p-2 rounded-lg cursor-pointer bg-[#1e293b]
                  ${
                    selectedSubject === subject.SubjectName
                      ? "bg-[#1e293b] text-white"
                      : "lg:bg-transparent text-gray-300 hover:bg-gray-800"
                  }`}
                onClick={() => {
                 
                  fetchFiles(subject.SubjectName!);
                  setShowRight(true);
                }}
              >
                <span>{subject.SubjectName}</span>
              </li>
            ))}
          </ul>
        ) : loading ? (
          <p className=" text-white w-full p-2 text-center">
            {" "}
            Loading Subjects...
          </p>
        ) : selectedDepartment ? (
          <p>No files found for "{selectedDepartment}".</p>
        ) : (
          <p>Select a department to view files.</p>
        )}
      </div>
    </div>
  );
};

export default MiddleSideBar;
