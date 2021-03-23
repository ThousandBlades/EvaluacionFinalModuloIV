<template>
  <div class="">
                <h3 class="text-center fw-bold">Inventario</h3>
                <div class="row">
                  <p class="m-2">Búsqueda:</p>
                  <input class="m-2" type= "text" v-model= "search"></div>
                <table class="table">
                    <thead>
                      <tr class="table-dark">
                        <th scope="col">ID</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Proveedor</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Stock Recomendado</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for= "(item, index) in filteredList" :key= "index" :class= "[ item.stock < item.recstock ? item.stock==0 ? 'table-danger' : 'table-warning' : '' ]">
                            <td>{{ item.id }}</td>
                            <td>{{ item.nombre }}</td>
                            <td>{{ item.marca }}</td>
                            <td class="row justify-content-end">{{ item.stock }}
                              <button class="border border-success btn btn-light btn-sm mx-1" @click= "item.stock++">+</button>
                              <button class="border border-danger btn btn-light btn-sm mx-1" @click= "item.stock > 0 ? item.stock-- : ''">-</button>
                            </td>
                            <td>{{ item.recstock }}</td>
                            <td>
                                <div class="btn btn-outline-info btn-sm mx-2" @click= "showModal = true ; updateindexreference(index);">Modificar</div>
                                <div class="btn btn-outline-danger btn-sm mx-2" @click= "delItem(index)">Eliminar</div>
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
    filteredList() {
      return this.items.filter(item => {
        return item.nombre.toLowerCase().includes(this.search.toLowerCase()) || item.marca.toLowerCase().includes(this.search.toLowerCase())
      })
    },

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
