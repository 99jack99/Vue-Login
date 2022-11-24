// /store/user.js
import { defineStore } from "pinia";
import axios from "axios";

import  router  from '../router';

export const useAuthStore = defineStore({
  id: "authStore",

  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: {},
  }),

  actions: {
    async login(em, pwd) {
      const res = axios
        .post("https://demo.treblle.com/api/v1/auth/login", {
          email: em,
          password: pwd,
        })
        .then(function (res) {
          console.log(res.status);
          router.push("/");
        })
        .catch(function (error) {
          console.log("mal", error);
        });
    },
  },
});
