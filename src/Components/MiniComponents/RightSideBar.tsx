import { storage } from "../../Config/AppwriteConfig";
import { useContext } from "react";
import { DataContext } from "../DownloadSection";
import {motion} from "framer-motion";
const RightSideBar = () => {
  const {  showRight,setShowRight, loading,files,selectedSubject  } = useContext(DataContext);
  const storageId=import.meta.env.VITE_STORAGE_ID;
  const downloadFile = async (fileId:string, fileName:string) => {
    try {
      // Fetch the file download URL from Appwrite
      const downloadUrl = await storage.getFileDownload(
        storageId,
        fileId
      );

     
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
    } catch (err) {
      console.error("Error downloading file:", err);
    }
  };
  const viewFile = async (fileId:string) => {
    try {
      const response = await storage.getFileView(
        storageId,
        fileId
      );
      window.open(response, "_blank"); 
    } catch (err) {
      console.error("Error viewing file:", err);
    }
  };
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
    <div className={`bg-transparent lg:w-[45%] w-[100%]   py-4 text-white space-y-4  lg:block ${
      showRight ? "block" : "hidden"
      }`}>
      <h2 className="text-lg font-semibold pt-2 pb-4 border-b  border-white text-left px-4">
        Study Materials
      </h2>
      <button
        onClick={() => setShowRight(false)}
        className="absolute top-0 right-2 px-4 py-2 text-white rounded-full bg-red-500 hover:bg-red-600 transition lg:hidden"
      >
        Close
      </button>
      <div className="px-4">
        {selectedSubject && files.length > 0 ? (
          <motion.ul variants={parents} initial="hidden" animate="visible" >
            {files.map((file) => (
              <motion.li variants={children} 
                key={file.fileid}
                className="flex  items-center w-full text-left  rounded-lg  bg-[#1e293b] lg:bg-transparent"
              >
                <span className="w-[70%] text-left px-2 py-3 rounded-lg  cursor-pointer 
                   lg:bg-transparent  text-gray-300 hover:bg-[#1e293b]"
                  >{file.filename}</span>
                  <button className=" px-2 py-3 rounded-lg  cursor-pointer 
                  lg:bg-transparent  text-gray-300 hover:bg-[#1e293b] ml-2" onClick={()=>{downloadFile(file.fileid!,file.filename!)}}>Download</button>
                     <button className=" px-2 py-3 rounded-lg  cursor-pointer 
                   lg:bg-transparent  text-gray-300 hover:bg-[#1e293b] ml-2" onClick={()=>{viewFile(file.fileid!)}}>View</button>
              </motion.li>
              
            ))}
          </motion.ul>
        ) : loading ? (
        <p className=" text-white w-full p-2 text-center">  Loading files...</p>
         
        ) : selectedSubject?( <p>No files found for "{selectedSubject}".</p>):
          (<p>Select a department to view files.</p>)
        }
      </div>
    </div>
  );
};
export default RightSideBar;
