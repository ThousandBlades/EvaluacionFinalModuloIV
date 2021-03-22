Vue.component('inventorylist', {
    template: `
    <div class="">
        <h3 class="text-center fw-bold">Items</h3>
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
                <tr v-for="item, index in items" :class="computedClass">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.marca }}</td>
                    <td>{{ item.stock }}</td>
                    <td>{{ item.recstock }}</td>
                    <td>
                        <div class="btn btn-outline-info" v-on:click="$store.commit('agregarItem')">Modificar</div>
                        <div class="btn btn-outline-danger" v-on:click="delItem(index)">Eliminar</div>
                    </td>
                </tr>
            </tbody>
        </table>    
    </div>
    `
    
    })