<script setup>

import {ref} from 'vue'


const userData = ref({
  name : "",
  email: "",
  password : ""
})



</script>

<template>
  <div id="wall">

    <div class="loginCard">

      <div class="title">
        <h1>Login with us!</h1>
        <h2>Info: {{userData.name}}</h2>
      </div>
      
        <div class="body">
          <input class="bodyItem" type="text" placeholder="Username:">
          <input class="bodyItem" type="text" placeholder="Password:">
          <button type="submit"> Go!</button>
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

.loginCard{
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