import env from "@/env/env";
import { Client } from "appwrite";

class RealtimeService {
  client = new Client();
  constructor() {
    this.client.setEndpoint(env.appwriteUrl).setProject(env.appwriteProjectId);
  }

  // subscribe document create
  subscribeDocCreated(callback) {
    try {
      this.client.subscribe(
        `databases.${env.appwriteDatabaseId}.collections.${env.appwriteBugCollectionId}.documents`,
        callback
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const realtimeService = new RealtimeService();
export default realtimeService;
