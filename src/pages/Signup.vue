<script setup>

</script>

<template>
  <div id="wall">

    <div class="loginCard">

      <div class="title">
        <h1>Sign up if you´re not!</h1>
      </div>
      
        <div class="body">
          <input class="bodyItem" type="text" placeholder="Name:">
          <input class="bodyItem" type="text" placeholder="Surname:">
          <input class="bodyItem" type="text" placeholder="Email:">
          <input class="bodyItem" type="text" placeholder="Password:">
          <button type="submit"> Sign!</button>
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
  width: 25em;
  height: 30em;
  
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