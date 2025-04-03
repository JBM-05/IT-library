import { DataContext } from "../DownloadSection";
import { useContext } from "react";
import { motion } from "framer-motion";
import "./styling.css"
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
    setShowRight,
  } = useContext(DataContext);
  const parents = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const children = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div
      className={` bg-transparent lg:w-[30%] w-[100%]  overflow-y-auto scrollbar-hidden lg:border-r py-4  text-white space-y-4 relative lg:block ${
        showLeft || showRight ? "hidden " : "block"
      } scrollbar-hidden overflow-y-auto`}
    >
      <div className="relative">
        <h2 className="text-lg font-semibold pt-2 pb-4 border-b border-white text-left px-4 ">
          Courses
        </h2>
        <button
          onClick={() => setShowLeft(true)}
          className="absolute top-0 right-2 px-4 py-2 text-white rounded-full bg-blue-500 hover:bg-blue-600 transition lg:hidden"
        >
          filter
        </button>
      </div>
      <div className="px-4">
        {selectedDepartment && subjects.length > 0 ? (
          <motion.ul
            className="scrollbar-hidden overflow-y-auto"
            variants={parents}
            initial="hidden"
            animate="visible"
          >
            {subjects.map((subject) => (
              <motion.li
                variants={children}
                key={subject.$id}
                className={`w-full text-left p-2 mb-2 rounded-lg cursor-pointer bg-[#1e293b]
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
              </motion.li>
            ))}
          </motion.ul>
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
