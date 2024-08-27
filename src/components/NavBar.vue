<template>
  <nav>
    <router-link to="/agregarMateria">Agregar Materia</router-link>
    <router-link to="/consultarMaterias">Consultar Materia</router-link>
    <router-link to="/consultarMateriasTodos">Consultar Materias</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
nav {
  padding: 30px;
  margin: 20px 20px;
  border: 20px 20px;
}

nav a {
    padding: 20px 20px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>