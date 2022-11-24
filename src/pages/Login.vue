<script setup>
import { ref } from "vue";

import axios from "axios";

import { useAuthStore } from "../Store/AuthStore";
const authStore = useAuthStore();


const userEmail = ref("");
const userPassword = ref("");


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

          <button type="submit" v-on:click="authStore.login(userEmail, userPassword)" class="bodyItem">
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
