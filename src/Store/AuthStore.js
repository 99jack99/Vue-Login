// /store/user.js

import { defineStore } from "pinia";

import axios from 'axios'

export const useAuthStore = defineStore("AuthStore", {

  state: () => {
    return{
      user: {},
    }
  },

  /* getters: {}, */

  actions: {

    login(credentials){
       try {
        
        const user = axios.post("url", body);


       } catch (error) {
        
       }
    }

  },
});
