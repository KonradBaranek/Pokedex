<template>
  <div>
    <h2>Przeglądaj pokemony dostępne w bazie</h2>
    <label>Typ:</label>
    <select v-model="type" >
      <option v-for="pType in types">{{ pType }}</option>
    </select>
    <button v-on:click="find">Znajdź</button>
    <div class="pokemon" v-for= "pokemon in pokemons" >
      <div v-if="!pokemon.edit">
        <p>ID: {{pokemon.id}}</p>
        <p>Nazwa: {{pokemon.name}}</p>
        <p v-if="pokemon.starter">Jest pokemonem startowym</p>
        <p v-if="!pokemon.starter">Nie jest pokemonem startowym</p>
        <p>Typ: {{pokemon.type}}</p>
        <div>
          <button v-on:click="del(pokemon._id)">Usun</button>
          <button v-if="!pokemon.edit" v-on:click="pokemon.edit=true">Edytuj</button>
          <button v-if="!pokemon.show" v-on:click="pokemon.show=!pokemon.show">Pokaż opis </button>
          <button v-if="pokemon.show" v-on:click="pokemon.show=!pokemon.show">Ukryj opis </button>
        </div>
        <div v-if="pokemon.show">
          <p>Opis:</p>
          <article>{{pokemon.description}}</article>
        </div>
      </div>
      <div  v-if="pokemon.edit">
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
            <button type="submit" v-on:click.prevent="upd(pokemon)">Zapisz zmiany</button>
            <button v-on:click="pokemon.edit=false">Anuluj</button>
        </form>
      </div> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props:{
    types:{
      type:Array,
      required:true
    }
  },
  data(){
    return{   
      pokemons:[],
      type:''
    }
  },
  methods:{
    upd(p){
      axios.put('/api/pokemons/'+p._id, p).then(
        res=>{
          console.log(res);
          p.edit=false;
          console.log(p.edit);
        }
      ).catch(function(error){
        console.log(error);
      });
    },
    del(id){
      axios.delete('/api/pokemons/'+id)
      .then(res =>{
        console.log(res);
        this.find();
      }).catch(function(error){
        console.log(error);
      })
    },
    find(){
      axios.get('/api/pokemons/?type='+this.type
      ).then(response =>{
        console.log(response.data);
        for (var i = 0; i < response.data.length; i++) {
          response.data[i].show=false;
          response.data[i].edit=false;
        }
        this.pokemons=response.data;
        console.log(this.pokemons);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
  
  
}
</script>

<style scoped>

</style>
