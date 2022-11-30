<script setup>
import { reactive, computed } from "vue";

import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

import { useAuthStore } from "../Store/AuthStore";
const authStore = useAuthStore();

const formData = reactive({
  email: "jbraun@yahoo.com",
  password: "********",
});

/* Estas son reglas que tiene que tener vuelidate para verificar los campos */
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Se requiere de un email!", required),
      email: helpers.withMessage("El email escrito es incorrecto", email),
    },
    password: { required },
  };
});

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    authStore.login(formData.email, formData.password);
  } else {
    alert("Email o contraseña son incorrectos");
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
            v-model="formData.email"
            class="bodyItem"
            type="email"
            placeholder="Email"
          />
          <span
            v-for="error in v$.email.$errors"
            :key="error.$uid"
            class="error"
            >{{ error.$message }}</span
          >
          <input
            v-model="formData.password"
            class="bodyItem"
            type="password"
            placeholder="Password"
          />
          <span
            v-for="error in v$.password.$errors"
            :key="error.$uid"
            class="error"
            >{{ error.$message }}</span
          >

          <button type="submit" v-on:click="submitForm()" class="bodyItem buttonLog">
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
  background-color: #262626b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  box-shadow: 28px 31px 31px -10px rgba(0,0,0,0.75);
}

.title{
  color: #FED049;
  text-shadow: 1px 1px 2px black;
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

.buttonLog{
  background-color: #FED049;
  border: 0.2em solid black;
  border-radius: 0.2em;
  cursor: pointer;
  
}

.buttonLog:hover{
background-color: black;
color: #FED049;
}

.error {
  color: red;
  font-style: italic;
  margin: 0.5em;
}
</style>
