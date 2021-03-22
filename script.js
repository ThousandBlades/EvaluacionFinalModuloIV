
const store = new Vuex.Store({
    state:{
        items: [
            {id:'1', nombre: 'Pasta de dientes', marca: 'Pepsodent', stock:150, recstock:50},
            {id:'2', nombre: 'Pasta de dientes', marca: 'Colgate', stock:48, recstock:50},
            {id:'3', nombre: 'Pasta de dientes', marca: 'Aquafresh', stock:125, recstock:50},
            {id:'4', nombre: 'Papel higiénico', marca: 'Confort', stock:45, recstock:60},
            {id:'5', nombre: 'Papel higiénico', marca: 'Noble', stock:0, recstock:60},
            {id:'6', nombre: 'Papel higiénico', marca: 'Scott', stock:76, recstock:60},
            {id:'7', nombre: 'Shampoo', marca: 'Ballerina', stock:42, recstock:40},
            {id:'8', nombre: 'Shampoo', marca: 'Head & Shoulders', stock:56, recstock:40},
            {id:'9', nombre: 'Shampoo', marca: 'Fructis', stock:38, recstock:40},
            {id:'10', nombre: 'M4A1', marca: 'Colt', stock:4, recstock:5},
            {id:'11', nombre: 'M4A1', marca: 'ArmaLite', stock:8, recstock:5},
            {id:'12', nombre: 'M4A1', marca: 'Remington Arms', stock:9, recstock:5},
            {id:'13', nombre: 'Desert Eagle', marca: 'Magnum Research', stock:7, recstock:5},
            {id:'14', nombre: 'Desert Eagle', marca: 'Israel Military Industries', stock:10, recstock:5},
            {id:'15', nombre: 'Remington 1100', marca: 'Remington Arms', stock:6, recstock:5},
            {id:'16', nombre: 'Saiga-12', marca: 'Izhmash', stock:12, recstock:5},
            {id:'17', nombre: 'SPAS-15', marca: 'Franchi S.p.A.', stock:2, recstock:5},
            {id:'18', nombre: '12 Gauge Ammo', marca: 'Remington', stock:213, recstock:200},
            {id:'19', nombre: '12 Gauge Ammo', marca: 'Hornady', stock:328, recstock:200},
            {id:'20', nombre: '9mm Ammo', marca: 'RBCD', stock:606, recstock:300},
            {id:'21', nombre: '9mm Ammo', marca: 'Red Army Standard Ammunition', stock:335, recstock:300},
            {id:'22', nombre: '5,56 Ammo', marca: 'Bae Systems', stock:164, recstock:200},
            {id:'23', nombre: '.44 Magnum', marca: 'Black Hills', stock:89, recstock:100},
            {id:'24', nombre: 'Poción de Vida', marca: 'La bruja del Mapocho', stock:56, recstock:50},
            {id:'25', nombre: 'Poción de Vida', marca: 'La bruja del Cajón', stock:26, recstock:50},
            {id:'26', nombre: 'Alta Poción de Vida', marca: 'La bruja del Cajón', stock:14, recstock:25},
            {id:'27', nombre: 'Agua Bendita', marca: 'Vaticano', stock:23, recstock:20},
            {id:'28', nombre: 'Holy Grenade', marca: 'Vaticano', stock:28, recstock:20},
            {id:'29', nombre: 'Marihuana', marca: 'del Jhonny', stock:50, recstock:60},
            {id:'30', nombre: 'Pack de Mascarillas', marca: 'Chancho', stock:78, recstock:60},
            
        ],
        nuevoid: '',
        nuevonombre: '',
        nuevomarca:'',
        nuevostock: '',
        nuevorecstock: '',
    },
    mutations:{
        agregarItem (state) {
            state.items.push({
                id: state.nuevoid, nombre: state.nuevonombre, marca: state.nuevomarca, stock: state.nuevostock, recstock: state.nuevorecstock
            });
            state.nuevoid = ''
            state.nuevonombre = ''
            state.nuevomarca = ''
            state.nuevostock = ''
            state.nuevorecstock = '';
        },

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
        delItem (index) {
            this.state.items.splice(index, 1)
            /* this.$delete(this.items, index) */
        }
    }
})
const RouteInv = { 
    template: '<div style = "border-radius:20px;background-color:cyan;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">Esto es un router 1</div>' 
}
const RouteAdd = { 
    template: '<div style = "border-radius:20px;background-color:green;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">Esto es un router 2</div>' 
}
const routes = [
    { path: '/routeInv', component: RouteInv,
    component: () => import(/* webpackChunkName: "about" */ '../html/src/components/addItem.vue')
 },
    { path: '/routeAdd', component: RouteAdd },
    
    ];

     
const router = new VueRouter({
    routes, // short for `routes: routes`    
    
});



var vuefeo = new Vue ({
    el: "#appx",
    store,
    router,
    data: {
        showModal: false
    
    },
    computed:{
        computedClass(index) {
            let className = '';
            const current = parseFloat(index.stock)
            const expected = parseFloat(index.recstock)
            if (current === 0) {
                className = 'table-danger'
            }            
            else if(current < expected ) {
                className = 'table-warning'
            }
            else{
                className = ''
            }
            return className
        },
       ...Vuex.mapState(['items','nuevoid','nuevonombre','nuevomarca','nuevostock','nuevorecstock']),
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
        ...Vuex.mapMutations(['agregarItem','updateNuevoid','updateNuevonombre','updateNuevomarca','updateNuevostock','updateNuevorecstock', 'delItem'])
         
     }
})