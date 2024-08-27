<template>
  <div class="container">
    <div class="materia-formulario">
      <div>
        <label for="codigo">Codigo</label>
        <input type="text" v-model="codigo" />
      </div>
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" v-model="nombre" />
      </div>
      <div>
        <label for="descripcion">Descripcion</label>
        <input type="text" v-model="desc" />
      </div>
      <div>
        <label for="numCreditos">Numero de Creditos</label>
        <input type="text" v-model="numCreditos" />
      </div>

      <div>
        <button type="boton" @click="guardar">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { agregarMateria  } from "../clients/clienteMateria";
export default {
    data(){
        return{
            codigo: null,
            nombre: null,
            desc: null,
            numCreditos: null,
        }
    },
    methods:{
        async guardar(materiaBody){
            const data = this.agregarMateria(materiaBody)
            console.log(data)
        },
    }
};
</script>

<style scoped>
.container{
    display: flex;
    margin: 20px;
    padding: 10px;

}

.label{
    display: flex;
    padding: 20px 20px;
    margin: 20px 20px;

}

.button{
    margin-top: 20px;
    border: solid 1px black;
    padding: 20px 20px;

}

</style>