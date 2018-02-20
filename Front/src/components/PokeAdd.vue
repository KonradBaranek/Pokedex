<template>
    <div id="add-pokemon">
        <h2>Dodaj nowego pokemona do bazy</h2>
        <form>
            <label>Nazwa pokemona:</label>
            <input type="text" v-model.lazy="pokemon.name" required />
            <label>ID:</label>
            <input type="number" v-model.lazy="pokemon.id" required />
            <label>Opis pokemona:</label>
            <textarea v-model.lazy.trim="pokemon.description"></textarea>
           
            <div id="checkboxes">
                <label>Dodatkowe informacje pokemonie:</label>
                <br/>
                <label>Jest pokemonem startowym</label>
                <input type="checkbox" value="yes" v-model="pokemon.starter" />
            </div>
            <label>Typ:</label>
            <select v-model="pokemon.type">
                <option v-for="pType in types">{{ pType }}</option>
            </select>
            <hr />
            <button type="submit" v-on:click.prevent="add">Dodaj Pokemona</button>
        </form>
        <div v-if="submitted">
            <h3>Dziękujemy za dodanie pokemona</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:{
        types:{
            type:Array,
            required:true
        }
    },
  data(){
    return{
      pokemon:{id:0,name:'',starter:false,type:'normal',weight:10},
      submitted: false
    }
  },
  methods:{
      add(){
          
          axios.post('/api/pokemons/',this.pokemon).then(function(response){
              console.log(response);
              this.submitted=true;
          }).catch(function(error){
              alert(error);
          })
      }
  }
}
</script>

<style>

</style>
