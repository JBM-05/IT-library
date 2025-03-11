import { Client, Storage , Databases } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") 
    .setProject("67c98d36000492669fe8"); 

const storage = new Storage(client);
const databases = new Databases(client);
export { storage , databases};
