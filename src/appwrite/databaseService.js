import { Client, Databases, ID, Query, Storage } from "appwrite";
import env from "../env/env";

class DbService {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client.setEndpoint(env.appwriteUrl).setProject(env.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  //create document
  async createDocument(data, collectionId = env.appwriteCollectionId) {
    try {
      return await this.databases.createDocument(
        env.appwriteDatabaseId,
        collectionId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // get all document
  async getDocsByAuthId({ $id }, collectionId = env.appwriteCollectionId) {
    try {
      return await this.databases.listDocuments(
        env.appwriteDatabaseId,
        collectionId,
        [Query.equal("ownerId", $id)]
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getAllDocs(collectionId = evn.appwriteCollectionId) {
    try {
      return await this.databases.listDocuments(
        env.appwriteDatabaseId,
        collectionId
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  // delete post
  async deleteDocument(docId, collectionId) {
    try {
      return this.databases.deleteDocument(
        env.appwriteDatabaseId,
        collectionId,
        docId
      );
    } catch (error) {
      return false;
    }
  }

  // update Note
  async updateDocument(
    docId,
    updatedDoc,
    collectionId
  ) {
    try {
      return await this.databases.updateDocument(
        env.appwriteDatabaseId,
        collectionId,
        docId,
        updatedDoc
      );
    } catch (error) {
      console.error("error from update note : " + error.message);
    }
  }

  // create responds
  async createResponds(data, uniqueId = ID.unique()) {
    try {
      return await this.databases.createDocument(
        env.appwriteDatabaseId,
        env.appwriteRespondCollectionId,
        uniqueId,
        { ...data }
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  // get all responds regarding to post
  async getAllRespondsByPostId({ $id }) {
    // console.log($id);
    try {
      return await this.databases.listDocuments(
        env.appwriteDatabaseId,
        env.appwriteRespondCollectionId,
        [Query.equal("postId", $id)]
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  // create user data documents like user'chosen categories and user's followers, user's following (here user data as user main data)
  async createUserData(data, uniqueId = ID.unique()) {
    try {
      return await this.databases.createDocument(
        env.appwriteDatabaseId,
        env.appwriteUserDataCollectionId,
        uniqueId,
        { ...data }
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  // get all user data
  async getAllUserMainData() {
    try {
      return await this.databases.listDocuments(
        env.appwriteDatabaseId,
        env.appwriteUserDataCollectionId
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  // get user data on the bases of user id
  async getAllUserDataByUserId(userId) {
    // console.log(userId);
    try {
      return await this.databases.listDocuments(
        env.appwriteDatabaseId,
        env.appwriteUserDataCollectionId,
        [Query.equal("userId", userId)]
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  // update user data
  async updateUserData(userDataId, updatedData) {
    console.log(userDataId, updatedData);
    try {
      return await this.databases.updateDocument(
        env.appwriteDatabaseId,
        env.appwriteUserDataCollectionId,
        userDataId,
        updatedData
      );
      // return await this.getAllDocs();
    } catch (error) {
      console.log(error.message);
    }
  }

  // upload file

  async uploadFile(file, bucketId = env.appwriteProfileImgBucketId) {
    try {
      return await this.storage.createFile(bucketId, ID.unique(), file);
    } catch (error) {
      console.log(error.message);
    }
  }

  // delete file
  async deleteFile(fileId, bucketId = env.appwriteProfileImgBucketId) {
    try {
      await this.storage.deleteFile(bucketId, fileId);
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  // get file preview
  filePreview(fileId, bucketId = env.appwriteProfileImgBucketId) {
    return this.storage.getFilePreview(bucketId, fileId);
  }
}

const dbService = new DbService();
export default dbService;
