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
    login(email, pwd) {
      const res = axios
        .post("https://demo.treblle.com/api/v1/auth/login", {
          email: email,
          password: pwd,
        })

        .then((res) => {

          console.log(res.status);

          this.user = res.data.user;
          this.logged()
          router.push("/profile")
        })

        .catch(function (error) {
          console.log("Credenciales incorrectas", error.message);
          
        });
    },

    signup(name, email, pwd){
      const res = axios
        .post("url", {
          name: name,
          email: email,
          password: pwd,
        })

        .then((res) => {

          console.log(res.status);
          router.push("/login")
        })

        .catch(function (error) {
          console.log("Algo ha ido mal", error.message);
          
        });
    },

    logout() {
      this.user == {};
      this.notLogged();
    },

    logged() {
      this.isLogged = true;
    },

    notLogged(){
      this.isLogged = false;
    }

  },
});
