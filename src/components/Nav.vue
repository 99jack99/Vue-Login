
<script setup>

</script>

<template>
    <div id="Container">

        <div class="navBox">
            <router-link to="/login" class="navItem lin">Login</router-link>
            <router-link to="/signup" class="navItem lin">Sign up</router-link>
        </div>


    </div>
</template>

<style lang="css" scoped>

.lin:hover{
  color: #FED049;
  text-shadow: 0.5px 0.5px black;
  border-bottom: 1px solid black;
}

#Container {
    
    background-color: #C69749;
    color: black;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    box-shadow: -2px 17px 31px -10px rgba(0,0,0,0.75);
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
</style>