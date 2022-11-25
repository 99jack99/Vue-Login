// /store/user.js
import { defineStore } from "pinia";
import axios from "axios";

import router from "../router";

export const useAuthStore = defineStore({
  id: "authStore",

  state: () => {
    return {
      user: {},
      isLogged: false,
    };
  },

  getters: {
    logState: (state) => state.isLogged,
    userName: (state) => state.user.name
  },

  actions: {
    login(em, pwd) {
      const res = axios
        .post("https://demo.treblle.com/api/v1/auth/login", {
          email: em,
          password: pwd,
        })

        .then((res) => {

          console.log(res.status);

          this.user = res.data.user;
          this.logged()
          router.push("/")
        })

        .catch(function (error) {
          console.log("mal", error.message);
          
        });
    },

    logout() {
      this.user == {};
    },

    logged() {
      this.isLogged = true;
    },

    add() {
      this.arr.push("Hola amigos");
      console.log(this.arr);
      this.logged();
    },
  },
});
