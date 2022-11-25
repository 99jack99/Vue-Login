<script setup>
import { ref, reactive, computed } from "vue";

import axios from "axios";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import { useAuthStore } from "../Store/AuthStore";
const authStore = useAuthStore();

const userEmail = ref("");
const userPassword = ref("");

const formData = reactive({
  email: "",
  password: "",
});

/* Estas son reglas que tiene que tener vuelidate para verificar los campos
 */
const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  };
});

/* const rules = reactive({
  email : {required, email},
  password : {required}
}); */

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("BIEN");
  } else {
    alert("MAL");
  }
};

/* llamamos a vuelidate, toma dos parametos. 1- reglas, 2- el state */
const v$ = useVuelidate(rules, formData);
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
            v-model="email"
            class="bodyItem"
            type="email"
            placeholder="Email"
          />
          <span
            v-for="error in v$.email.$errors"
            :key="error.$uid"
            class="error"
          ></span>
          <input
            v-model="password"
            class="bodyItem"
            type="password"
            placeholder="Password"
          />

          <button type="submit" v-on:click="submitForm()" class="bodyItem">
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

.error {
  color: red;
}
</style>
