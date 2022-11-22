
<script setup>

</script>

<template>
    <div id="Container">

        <div class="navBox">
            <router-link to="/login" class="navItem">Login</router-link>
            <router-link to="/signup" class="navItem">Sign up</router-link>
        </div>


    </div>
</template>

<style lang="css" scoped>
#Container {

    background-color: rgb(255, 0, 0);
    color: black;
    width: 100%;
    height: 10vh;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

}



.navItem {
    padding: 0.5em;
    height: 2em;
    width: 4em;

    background-color: plum;

    margin-inline: 10px;
}
</style>