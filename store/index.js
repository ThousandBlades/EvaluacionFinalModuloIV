import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
        {id: 1, nombre: 'Pasta de dientes', marca: 'Pepsodent', stock:150, recstock:50},
        {id: 2, nombre: 'Pasta de dientes', marca: 'Colgate', stock:48, recstock:50},
        {id: 3, nombre: 'Pasta de dientes', marca: 'Aquafresh', stock:125, recstock:50},
        {id: 4, nombre: 'Papel higiénico', marca: 'Confort', stock:45, recstock:60},
        {id: 5, nombre: 'Papel higiénico', marca: 'Noble', stock:0, recstock:60},
        {id: 6, nombre: 'Papel higiénico', marca: 'Scott', stock:76, recstock:60},
        {id: 7, nombre: 'Shampoo', marca: 'Ballerina', stock:42, recstock:40},
        {id: 8, nombre: 'Shampoo', marca: 'Head & Shoulders', stock:56, recstock:40},
        {id: 9, nombre: 'Shampoo', marca: 'Fructis', stock:38, recstock:40},
        {id: 10, nombre: 'M4A1', marca: 'Colt', stock:4, recstock:5},
        {id: 11, nombre: 'M4A1', marca: 'ArmaLite', stock:8, recstock:5},
        {id: 12, nombre: 'M4A1', marca: 'Remington Arms', stock:9, recstock:5},
        {id: 13, nombre: 'Desert Eagle', marca: 'Magnum Research', stock:7, recstock:5},
        {id: 14, nombre: 'Desert Eagle', marca: 'Israel Military Industries', stock:10, recstock:5},
        {id: 15, nombre: 'Remington 1100', marca: 'Remington Arms', stock:6, recstock:5},
        {id: 16, nombre: 'Saiga-12', marca: 'Izhmash', stock:12, recstock:5},
        {id: 17, nombre: 'SPAS-15', marca: 'Franchi S.p.A.', stock:2, recstock:5},
        {id: 18, nombre: '12 Gauge Ammo', marca: 'Remington', stock:213, recstock:200},
        {id: 19, nombre: '12 Gauge Ammo', marca: 'Hornady', stock:328, recstock:200},
        {id: 20, nombre: '9mm Ammo', marca: 'RBCD', stock:606, recstock:300},
        {id: 21, nombre: '9mm Ammo', marca: 'Red Army Standard Ammunition', stock:335, recstock:300},
        {id: 22, nombre: '5,56 Ammo', marca: 'Bae Systems', stock:164, recstock:200},
        {id: 23, nombre: '.44 Magnum', marca: 'Black Hills', stock:89, recstock:100},
        {id: 24, nombre: 'Poción de Vida', marca: 'La bruja del Mapocho', stock:56, recstock:50},
        {id: 25, nombre: 'Poción de Vida', marca: 'La bruja del Cajón', stock:26, recstock:50},
        {id: 26, nombre: 'Alta Poción de Vida', marca: 'La bruja del Cajón', stock:14, recstock:25},
        {id: 27, nombre: 'Agua Bendita', marca: 'Vaticano', stock:23, recstock:20},
        {id: 28, nombre: 'Holy Grenade', marca: 'Vaticano', stock:28, recstock:20},
        {id: 29, nombre: 'Marihuana', marca: 'del Jhonny', stock:50, recstock:60},
        {id: 30, nombre: 'Pack de Mascarillas', marca: 'Chancho', stock:78, recstock:60},
        
    ],
    //placeholders item nuevo
    nuevoid: '',
    nuevonombre: '',
    nuevomarca:'',
    nuevostock: '',
    nuevorecstock: '',
    //placeholders modificacion
    replaceid: '',
    replacenombre: '',
    replacemarca: '',
    replacestock: '',
    replacerecstock: '',
    //placeholder selector de item del modal
    indexreference: '',
},
  mutations: {
    agregarItem (state) {
        state.items.push({
            id: state.nuevoid, nombre: state.nuevonombre, marca: state.nuevomarca, stock: state.nuevostock, recstock: state.nuevorecstock
        });
        state.nuevoid = ''
        state.nuevonombre = ''
        state.nuevomarca = ''
        state.nuevostock = ''
        state.nuevorecstock = ''
    },
      modificarItem(state) {
        let indexnumber = state.indexreference;

        if (indexnumber !== -1) {
            if (state.replaceid !== '') {
                state.items[indexnumber].id = state.replaceid;
            }
            if (state.replacenombre !== '') {
                state.items[indexnumber].nombre = state.replacenombre;
            }
            if (state.replacemarca !== '') {
                state.items[indexnumber].marca = state.replacemarca;
            }
            if (state.replacestock !== '') {
                state.items[indexnumber].stock = state.replacestock;
            }
            if (state.replacerecstock !== '') {
                state.items[indexnumber].recstock = state.replacerecstock;
            }
    }
        state.replaceid = ''
        state.replacenombre = ''
        state.replacemarca = ''
        state.replacestock = ''
        state.replacerecstock = '';
    },
    //Update inputs additem -> placeholders para nuevo item
    updateNuevoid (state, nuevoid) {
        state.nuevoid = nuevoid
    },
    updateNuevonombre (state, nuevonombre) {
        state.nuevonombre = nuevonombre
    },
    updateNuevomarca (state, nuevomarca) {
        state.nuevomarca = nuevomarca
    },
    updateNuevostock (state, nuevostock) {
        state.nuevostock = nuevostock
    },
    updateNuevorecstock (state, nuevorecstock) {
        state.nuevorecstock = nuevorecstock
    },
    //update inputs modal -> placeholders modificacion de items
    updatereplaceid (state, replaceid) {
        state.replaceid = replaceid
    },
    updatereplacenombre (state, replacenombre) {
        state.replacenombre = replacenombre
    },
    updatereplacemarca (state, replacemarca) {
        state.replacemarca = replacemarca
    },
    updatereplacestock (state, replacestock) {
        state.replacestock = replacestock
    },
    updatereplacerecstock (state, replacerecstock) {
        state.replacerecstock = replacerecstock
    },
    updateindexreference (state, indexreference) {
        state.indexreference = indexreference
    },
    //eliminar item segun index
    delItem (state,index) {
       state.items.splice(index,1)
        
    },
},
  actions: {
  },
  modules: {
  }
})
