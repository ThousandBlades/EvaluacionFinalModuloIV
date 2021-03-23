<template>
  <div class= "container " id="app">
    <h2 class="text-center fw-bold my-3 p-3 table-dark">Administración de Inventario</h2>
    <div id="row">
      <router-link class="col-4 btn btn-outline-dark m-3" to="/">Inventario</router-link>
      <router-link class="col-4 btn btn-outline-success m-3" to="/addItem">Agregar Nuevo</router-link>
    </div>
    <router-view/>
    <div class= "text-light bg-dark m-0"><p>AlgoRandom.ltda Todos los derechos reservados. 2021</p></div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
