<script setup>
import { useAuthStore } from "../Store/AuthStore";
const authStore = useAuthStore();
</script>

<template>
  <div id="card">
    <div class="bodyCard">
      <div class="titles">
        <div v-if="authStore.isLogged">
          <h1>Hola {{ authStore.user.name}}! Encantados de tener de vuelta!</h1>
        </div>

        <div v-else>
          <h2>No crees que deberias logearte primero!?🤬 🤬 </h2>
        </div>

       
      </div>

    </div>
  </div>
</template>

<style lang="css" scoped>
#card {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;
}

.bodyCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.titles {
  font-size: 2em;
  color: #735F32;
  text-shadow: 1px 1px #FED049;
  margin: 5em;
}

.logoutbutton {
  margin: 2em;
  width: 10em;
  padding: 1em;
  border-radius: 1em;

  background-color: yellow;
}
</style>
