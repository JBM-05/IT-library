import LeftSideBar from "./MiniComponents/LeftSideBar";
import MiddleSideBar from "./MiniComponents/MiddleSideBar";
import RightSideBar from "./MiniComponents/RightSideBar";
import { useState, createContext } from "react";
import { databases } from "../Config/AppwriteConfig";
import { Query } from "appwrite";
const collectionId = import.meta.env.VITE_COLLECTION_ID1;
const collectionId2 = import.meta.env.VITE_COLLECTION_ID2;
const databaseId = import.meta.env.VITE_DATABASE_ID;
interface DataContextType {
  showLeft: boolean;
  showRight: boolean;
  selectedDepartment: string | null;
  selectedSubject: string | null;
  setShowLeft: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRight: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedSubject: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  fetchSubjects: (category: string) => Promise<void>;
  fetchFiles: (category: string) => Promise<void>;
  subjects: receivedSubjects[];
  files: receivedSubjects[];
}
interface receivedSubjects {
  fileId: number;
  SubjectName?: string;
  $id: string;
  fileid?: string;
  filename?: string;
  $collectionId: string;
  $databaseId: string;
}
export const DataContext = createContext<DataContextType>({
  showLeft: false,
  showRight: false,
  loading: false,
  setShowLeft: () => {},
  setShowRight: () => {},
  fetchSubjects: async () => {},
  fetchFiles: async () => {},
  selectedDepartment: null,
  selectedSubject: null,
  setSelectedSubject: () => {},
  subjects: [],
  files: [],
});
const DownloadSection = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [, setError] = useState<string | null>(null);
  const [subjects, setSubjects] = useState<receivedSubjects[]>([]);
  const [files, setFiles] = useState<receivedSubjects[]>([]);
  const fetchSubjects = async (category: string) => {
    setLoading(true);
    setError(null);
    setSubjects([]);
    try {
      const response = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("Department", category),
      ]);
      const fetchedSubjects = response.documents.map((document) => ({
        ...document,
        fileId: document.fileId,
      }));
      setSubjects(fetchedSubjects);
      setSelectedDepartment(category);
    } catch (err) {
      console.error("Error fetching files:", err);
      setError("Failed to load files. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const fetchFiles = async (category: string) => {
    setLoading(true);
    setError(null);
    setFiles([]);
    setSelectedSubject(category);
    try {
      const response = await databases.listDocuments(
        databaseId,
        collectionId2,
        [Query.equal("SubjectName", category.trim())]
      );
      const fetchedFiles = response.documents.map((document) => ({
        ...document,
        fileId: document.fileId,
      }));
      setFiles(fetchedFiles);
    } catch (err) {
      console.error("Error fetching files:", err);
      setError("Failed to load files. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      id="download"
      className="bg-gray-900 h-screen w-full bg-cover bg-left text-white relative pt-[100px] pb-[100px]"
    >
      <div
        className="border h-[667px] border-white/20 bg-slate-200/10 rounded-[0.75rem] w-[90%] mx-auto text-center flex relative 
        transition-all duration-300 hover:shadow-[0_0_30px_5px_rgba(59,130,246,0.6)] overflow-x-auto"
      >
        <DataContext.Provider
          value={{
            showLeft,
            showRight,
            loading,
            subjects,
            files,
            setShowLeft,
            setShowRight,
            fetchSubjects,
            fetchFiles,
            selectedDepartment,
            selectedSubject,
            setSelectedSubject,
          }}
        >
          <LeftSideBar />
          <MiddleSideBar />
          <RightSideBar />
        </DataContext.Provider>
      </div>
    </div>
  );
};
export default DownloadSection;
