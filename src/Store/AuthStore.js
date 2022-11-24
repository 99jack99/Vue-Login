// /store/user.js
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
  id: "authStore",

  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: "asdad",
  }),
  actions: {
    /* async login(username, password) {
      try {
        const user = await axios.post("", {
          username,
          password
        });

     
        this.user = user;

        


      } catch (error) {
        console.log(error);
      }
    }, */

    async login(email, pwd) {
      try {

        let response = await axios.post(
          "https://demo.treblle.com/api/v1/auth/login",
          {
            email: email,
            password: pwd,
          }
        );
        
        console.log();

      } catch (error) {
        console.log(error);
      }
    },

    logout() {
      this.user = null;

      router.push("/account/login");
    },
  },
});
