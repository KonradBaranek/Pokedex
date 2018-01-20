<template>
  <div id="app">
    <h1>Pokemon: {{pokemon.name}}</h1>
    <p>ID:{{pokemon.id}}</p>
    <p v-if="pokemon.is_default">Jest pokemonem startowym</p>
    <p v-else> Nie jest pokemonem startowym</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){return{
    pokemon:{id: 1,
    name: "bulbasaur",
    base_experience: 64,
    height: 7,
    is_default: true,
    order: 1,
    weight: 69}
  }}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0050;
  margin-top: 60px;
}
</style>
