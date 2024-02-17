import { Client, Account, ID } from "appwrite";
import env from "../env/env";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(env.appwriteUrl).setProject(env.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // create account
  async signup({ id = ID.unique(), email, password, name }) {
    try {
      const userData = await this.account.create(id, email, password, name);
      if (userData) {
        //login
        return this.login({ email, password });
      }
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  // login
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  //

  // logout
  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log(error.message);
    }
  }

  // get user
  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }

  // update email
  async updateEmail({ email, password }) {
    try {
      return await this.account.updateEmail(email, password);
    } catch (error) {
      console.log(error.message);
    }
  }

  // updated name
  async updateName({ name }) {
    try {
      return await this.account.updateName(name);
    } catch (error) {
      console.log(error.message);
    }
  }

  // get preference
  async getUserPrefs() {
    try {
      return await this.account.getPrefs();
    } catch (error) {
      return error.message;
    }
  }

  // update account preferences
  async updateUserPrefs(data) {
    try {
      await this.account.updatePrefs(data);
    } catch (error) {}
  }

  // Delete account
  //  todo: this service isn't working
  async deleteAccount(id) {
    try {
      return await this.account.deleteIdentity(id);
    } catch (error) {
      console.log(error.message);
    }
  }
}

const authService = new AuthService();
export default authService;
