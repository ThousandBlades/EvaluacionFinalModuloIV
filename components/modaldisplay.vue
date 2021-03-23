<template>
 <div>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p class="my-2">Id: {{(items)[indexreference].id}}</p><input class="my-1"  type="number" v-model= "replaceid">
              <p class="my-2">Producto: {{(items)[indexreference].nombre}}</p><input class="my-1"  type="text" v-model= "replacenombre">
              <p class="my-2">Proveedor: {{(items)[indexreference].marca}}</p><input class="my-1"  type="text" v-model= "replacemarca">
              <p class="my-2">Stock: {{(items)[indexreference].stock}}</p><input class="my-1"  type="number" v-model= "replacestock">
              <p class="my-2">R.Stock: {{(items)[indexreference].recstock}}</p><input class="my-1"  type="number" v-model= "replacerecstock">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer container row">
              <button class="btn btn-outline-info col" @click="$emit('close'); $store.commit('modificarItem');">
                Confirmar
              </button>
              <button class="btn btn-outline-danger col" @click="$emit('close');">
                Cancelar
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
    </div>
</template>

<script>
import Vuex from 'vuex'
import store from '../store/index.js'

export default {
  name: 'modaldisplay',
  store,
    computed: {
   ...Vuex.mapState(['items', 'indexreference', 'replaceid', 'replacenombre', 'replacemarca', 'replacestock', 'replacerecstock']),
    //getters y setters model modificacion de items
    replaceid: {
    get () {
      return this.$store.state.replaceid
    },
    set (value) {
      this.$store.commit('updatereplaceid', value)
    }},
    replacenombre: {
    get () {
      return this.$store.state.replacenombre
    },
    set (value) {
      this.$store.commit('updatereplacenombre', value)
    }},
    replacemarca: {
    get () {
        return this.$store.state.replacemarca
    },
    set (value) {
        this.$store.commit('updatereplacemarca', value)
    }},
    replacestock: {
    get () {
        return this.$store.state.replacestock
    },
    set (value) {
        this.$store.commit('updatereplacestock', value)
    }},
    replacerecstock: {
    get () {
        return this.$store.state.replacerecstock
    },
    set (value) {
        this.$store.commit('updatereplacerecstock', value)
    }},
    changeindexreference: {
    get () {
        return this.$store.state.indexreference
    },
    set (value) {
        this.$store.commit('updateindexreference', value)
    }}
            
},
methods:{
    ...Vuex.mapMutations(['updateindexreference','updatereplaceid','updatereplacenombre','updatereplacemarca','updatereplacestock','modificarItem']),

 },
 data: function () {
    return {
          
    }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
