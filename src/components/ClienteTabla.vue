<template>
  <div class="container">
    <div class="materia-tabla">
        <table>
            <thead>
                <th>
                    Codigo
                </th>
                <th>
                    Nombre
                </th>
                <th>
                    Accion
                </th>
                <th>
                    Accion
                </th>
            </thead>
            <tbody>
                <td>
                </td>
            </tbody>
        </table>
    </div>

  </div>
</template>

<script>
import { actualizarFachada, borrarPorMateriaFachada  } from "../clients/clienteMateria";
export default {
    data(){
        return{
            codigo: null,
            nombre: null,
        }
    },
    methods:{
        async actualizar(materiaBody){
            this.codigo = materiaBody.codigo
            this.nombre = materiaBody.nombre
            this.desc = materiaBody.desc
            this.numCreditos = materiaBody.numCreditos

            const data = actualizarFachada(materiaBody)
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
    color: blue;
    text-align: middle;

}

</style>