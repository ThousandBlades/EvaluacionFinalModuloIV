<template>
  <div class="about">
    <div class="bg-light text-dark p-3 text-center">
                <h3 class="text-center fw-bold">Agregar un Nuevo Producto al Inventario</h3>
                <input id="inputid" class="my-3 ninput" type="number" v-model= "nuevoid" placeholder='#'><br>
                <input class="my-3"  type="text" v-model= "nuevonombre" placeholder='Producto' maxlength="36"><br>                
                <input class="my-3" type="text" v-model= "nuevomarca" placeholder='Fabricante' maxlength="36"><br>                
                <input class="my-3 ninput"  type="number" v-model= "nuevostock" placeholder='Stock'><br>
                <input class="my-3 ninput"  type="number" v-model= "nuevorecstock" placeholder='Stock Recomendado'>
                <div>
                    <div class="btn btn-outline-success align-self-center" v-on:click="$store.commit('agregarItem')">Enviar</div>
                </div>
                
            </div>
  </div>
</template>
<script>
import Vuex from 'vuex'
import store from '../store/index.js'

export default {
  name: 'additem',
  computed: {
   ...Vuex.mapState(['items','nuevoid','nuevonombre','nuevomarca','nuevostock','nuevorecstock']),
   //getters y setters adición de items
   nuevoid: {
    get () {
      return this.$store.state.nuevoid
    },
    set (value) {
      this.$store.commit('updateNuevoid', value)
    }},
   nuevonombre: {
    get () {
      return this.$store.state.nuevonombre
    },
    set (value) {
      this.$store.commit('updateNuevonombre', value)
    }},
    nuevomarca: {
    get () {
        return this.$store.state.nuevomarca
    },
    set (value) {
        this.$store.commit('updateNuevomarca', value)
    }},
    nuevostock: {
    get () {
        return this.$store.state.nuevostock
    },
    set (value) {
        this.$store.commit('updateNuevostock', value)
    }},
    nuevorecstock: {
    get () {
        return this.$store.state.nuevorecstock
    },
    set (value) {
        this.$store.commit('updateNuevorecstock', value)
    }},
            
},
methods:{
    ...Vuex.mapMutations(['updateNuevoid','updateNuevonombre','updateNuevomarca','updateNuevostock','updateNuevorecstock'])
     
 }
}
</script>