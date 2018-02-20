<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <nav>
      <ul>
        <li v-on:click="setState('add')">
          <a>Dodaj</a>
        </li>
        <li v-on:click="setState('show')">
          <a>
            Znajdz
          </a>
        </li>
      </ul>
    </nav>
    <pokeadd v-bind:types="types" v-if="add"> </pokeadd>
    <pokelist v-bind:types="types" v-if="show"> </pokelist>
    
  </div>
</template>

<script>

import PokeList from './components/PokeList.vue';
import PokeAdd from './components/PokeAdd.vue';

export default {
  components: {
    'pokelist': PokeList,
    'pokeadd' : PokeAdd
  },
  data(){
    return{
      types:['każdy','normalny','trujący','ognisty','latający','trawiasty','elektryczny','kamienny','wodny'],
      add: false,
      show: true
    }
  },
  methods:{
    setState: function(a){
      if(a=='add'){
        this.add=true;
        this.show=false;
      }else if(a=='show'){
        this.add=false;
        this.show=true;
      }
    }
  }
}
</script>

<style>
body{
    font-family: Raleway;
    color: rgb(255, 255, 255);
    background: #ff2424;
    margin: 10px 30px;
}

input[type="text"],input[type="number"] {
    display: block;
    width: 300px;
    margin: 20px 0;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
}
label{
    font-weight: bold;
}
form{
    max-width: 350px;
    margin: 30px auto;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111111;
}


textarea {
	width: 300px;
	height: 120px;
  border: 3px solid #cccccc;
  font-size: 20px;
	padding: 5px;
	font-family: Raleway;
	background-position: bottom right;
	background-repeat: no-repeat;
}

button{
    float: right;
    background: rgb(0, 153, 255);
    border: 0;
    padding: 5px 10px;
    color: rgb(3, 0, 44);
    display: inline-block;
    border-radius: 4px;
    cursor: pointer;
}

button:hover{
  background: rgb(2, 59, 97);
}
.pokemon{
  font-family: Raleway;
    max-width: 800px;
    margin: 60px auto;
    padding: 10px 20px;
    color: rgb(0, 0, 0);
    background: #fdfdfd;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
}


</style>
