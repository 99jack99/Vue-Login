<script setup>
import { ref } from "vue";

import axios from "axios";

import { useAuthStore } from "../Store/AuthStore";

const userEmail = ref("");
const userPassword = ref("");

const verifier = () => {
  if (userEmail.value == "" || userPassword.value == "") {
    return alert("Rellena los campos");
  }

  const res = axios
    .post("https://demo.treblle.com/api/v1/auth/login", {
      email: userEmail.value,
      password: userPassword.value,
    })
    .then(function (res) {
      console.log(res.status);
    })
    .catch(function (error) {
      console.log("mal", error);
    });
};
</script>

<template>
  <div id="wall">
    <div class="loginCard">
      <div class="title">
        <h1>Login with us!</h1>
      </div>

      <div>
        <form @submit.prevent class="body">
          <input
            v-model="userEmail"
            class="bodyItem"
            type="text"
            placeholder="Email"
          />
          <input
            v-model="userPassword"
            class="bodyItem"
            type="password"
            placeholder="Password"
          />

          <button type="submit" v-on:click="verifier()" class="bodyItem">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#wall {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
}

.loginCard {
  width: 20em;
  height: 20em;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2em;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bodyItem {
  margin: 0.5em;
  padding: 0.7em;
}
</style>
