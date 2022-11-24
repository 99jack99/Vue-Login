<script setup>

</script>

<template>
  <div id="card">
    <div class="bodyCard">
      <div class="titles">
      <h1>Hola Usuario, </h1>

      <h2>Estamos encantados de verte otra vez!</h2>
    </div>

    <div class="body">
      <button class="logoutbutton">Salir</button>
    </div>
    </div>
    
  </div>
</template>

<style lang="css" scoped>

#card{

  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5em;

}

.bodyCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.titles{
  font-size: 2em;
  color: white;
  text-shadow: 0.2em 0.2em 0.5em palevioletred;
}


.logoutbutton{
  margin: 2em;
  width: 10em;
  padding: 1em;
  border-radius: 1em;

  background-color: yellow;

}

</style>