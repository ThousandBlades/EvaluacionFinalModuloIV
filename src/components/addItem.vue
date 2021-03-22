<template>
        <div class="bg-light text-dark p-3 text-center">
            <h3 class="text-center fw-bold">Agregar un Nuevo Producto al Inventario</h3>
            <input id="inputid" class="my-3 ninput" type="number" v-model="nuevoid" placeholder='#'><br>
            <input class="my-3"  type="text" v-model="nuevonombre" placeholder='Producto' maxlength="36"><br>                
            <input class="my-3" type="text" v-model="nuevomarca" placeholder='Fabricante' maxlength="36"><br>                
            <input class="my-3 ninput"  type="number" v-model="nuevostock" placeholder='Stock'><br>
            <input class="my-3 ninput"  type="number" v-model="nuevorecstock" placeholder='Stock Recomendado'>
            <div>
                <div class="btn btn-outline-success align-self-center" v-on:click="$store.commit('agregarItem')">Enviar</div>
            </div>   
</template>