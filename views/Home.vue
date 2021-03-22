<template>
  <div class="">
                <h3 class="text-center fw-bold">Inventario</h3>
                <div class="row">
                  <p class="m-2">Búsqueda:</p>
                  <input class="m-2" type= "text" v-model= "search"></div>
                <table class="table">
                    <thead>
                      <tr class="table-primary">
                        <th scope="col">ID</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Stock Recomendado</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for= "(item, index) in items" :key= "index" :class= "computedClass">
                            <td>{{ item.id }}</td>
                            <td>{{ item.nombre }}</td>
                            <td>{{ item.marca }}</td>
                            <td>{{ item.stock }}</td>
                            <td>{{ item.recstock }}</td>
                            <td>
                                <div class="btn btn-outline-info" @click= "showModal = true ; updateindexreference(index);">Modificar</div>
                                <div class="btn btn-outline-danger" @click= "delItem(index)">Eliminar</div>
                            </td>
                        </tr>
                      </tbody>
                </table> 
                <div>
              <modaldisplay id="show-modal" v-if= "showModal" @close= "showModal = false">
              <h3 slot="header">Ingrese Nuevos Datos</h3>
              </modaldisplay>
            </div>   
            </div>
</template>

<script>
import Vuex, { mapState } from 'vuex'
import modaldisplay from "../components/modaldisplay.vue";

export default {
  name: 'Home',
  components: {
    modaldisplay
  },
  computed: {
    computedClass(index) {
        let className = '';
        const current = parseFloat(20)
        const expected = parseFloat(15)
        if (current === 0) {
            className = 'table-danger'
        }            
        else if(current < expected) {
            className = 'table-warning'
        }
        else{
            className = ''
        }
        return className
    },
    /* totalPages: function() {
          return Math.ceil(this.resultCount / this.itemsPerPage)}, */

   ...Vuex.mapState(['items','nuevoid','nuevonombre','nuevomarca','nuevostock','nuevorecstock', 'indexreference']),
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
    }}
            
},
methods:{
    ...Vuex.mapMutations(['updateNuevoid','updateNuevonombre','updateNuevomarca','updateNuevostock','updateNuevorecstock', 'delItem', 'updateindexreference']),
     
    /* setPage: function(pageNumber) {
          this.currentPage = pageNumber
        }
     
 },
    filters: {
        paginate: function(table) {
            this.resultCount = table.length
            if (this.currentPage >= this.totalPages) {
              this.currentPage = this.totalPages - 1
            }
            var index = this.currentPage * this.itemsPerPage
            return list.slice(index, index + this.itemsPerPage)
        } */
    },
data: function () {
    return {
        showModal: false,
        search: '',
        /* currentPage: 0,
        itemsPerPage: 10,
        resultCount: 0 */
    }
},
}
</script>
