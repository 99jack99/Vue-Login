<script setup>
import { useAuthStore } from "../Store/AuthStore";
const authStore = useAuthStore();
</script>

<template>
  <div id="Container">
    <div v-if="authStore.isLogged" class="navBox">
      <div class="navItem lin">
        {{ authStore.user.name }}
      </div>

      <div>
        <button class="logoutbutton navItem" v-on:click="authStore.$reset()">
          Salir
        </button>
      </div>
    </div>

    <div v-else class="navBox">
      <router-link to="/login" class="navItem lin">Login</router-link>
      <router-link to="/signup" class="navItem lin">Sign up</router-link>
    </div>
  </div>
</template>

<style lang="css" scoped>
.lin:hover {
  color: #fed049;
  text-shadow: 0.5px 0.5px black;
  border-bottom: 1px solid black;
}

#Container {
  background-color: #c69749;
  color: black;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  box-shadow: -2px 17px 31px -10px rgba(0, 0, 0, 0.75);
}

.navBox{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.navItem {
  padding: 0.5em;
  height: 2em;
  width: 4em;
  margin-inline: 10px;
  text-decoration: none;
  color: black;
  font-size: 1.3em;
  font-weight: bold;
}

.logoutbutton{
  background-color: #FED049;
  border: 0.2em solid black;
  border-radius: 0.2em;
  cursor: pointer;
  
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.logoutbutton:hover{
background-color: black;
color: #FED049;
}
</style>
