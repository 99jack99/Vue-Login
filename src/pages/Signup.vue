<script setup>
import { reactive, computed } from "vue";

import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

import { useAuthStore } from "../Store/AuthStore";
const authStore = useAuthStore();

const formData = reactive({
  name: "",
  email: "",
  password: {
    password: "",
    confirm: "",
  },
});

/* Estas son reglas que tiene que tener vuelidate para verificar los campos */
const rules = computed(() => {
  return {
    name: {
      required,
      minLength: minLength(5),
    },
    email: {
      required,
      email,
    },
    password: {
      password: { required },
      confirm: { required, sameAs: sameAs(formData.password.password) },
    },
  };
});

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("bien");
  } else {
    alert("No bien formulario");
  }
};

/* llamamos a vuelidate, toma dos parametos. 1- reglas, 2- el state */
const v$ = useVuelidate(rules, formData);
</script>

<template>
  <div id="wall">
    <div class="RegisterCard">
      <div class="title">
        <h1>Join us by Sign In Up!</h1>
      </div>

      <div class="body">
        <form @submit.prevent class="body">
          <input
            v-model="formData.name"
            class="bodyItem"
            type="text"
            placeholder="Nombre"
          />
          <span
            v-for="error in v$.name.$errors"
            :key="error.$uid"
            class="error"
            >{{ error.$message }}</span
          >
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
            v-model="formData.password.password"
            class="bodyItem"
            type="password"
            placeholder="Contraseña"
          />
          <span
            v-for="error in v$.password.password.$errors"
            :key="error.$uid"
            class="error"
            >{{ error.$message }}</span
          >

          <input
            v-model="formData.password.confirm"
            class="bodyItem"
            type="password"
            placeholder="Contraseña"
          />
          <span
            v-for="error in v$.password.confirm.$errors"
            :key="error.$uid"
            class="error"
            >{{ error.$message }}</span
          >

          <button
            type="submit"
            v-on:click="submitForm()"
            class="bodyItem buttonSign"
          >
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

.RegisterCard {
  width: 25em;
  height: 30em;

  background-color: #262626b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
  box-shadow: 28px 31px 31px -10px rgba(0, 0, 0, 0.75);
}
.title {
  color: #fed049;
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

.buttonSign {
  background-color: #fed049;
  border: 0.2em solid black;
  border-radius: 0.2em;
  cursor: pointer;
  padding: 0.5em;
  margin: 0.5em;
}

.buttonSign:hover {
  background-color: black;
  color: #fed049;
}

.error {
  color: red;
  font-style: italic;
  margin: 0.5em;
}
</style>
