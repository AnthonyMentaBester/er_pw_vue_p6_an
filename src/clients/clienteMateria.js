import axios from "axios";

const agregarMateria = async(materiaBody) =>{
    const data = axios.post(`http://localhost:8080//API/v1.0/Universidad/materias`,materiaBody).then(r => r.data)
    console.log(data)
}

const buscarPorCodigo = async(codigo) =>{
    const data = axios.get(`http://localhost:8080//API/v1.0/Universidad/materias/${codigo}`).then(r=> r.data)
    console.log(data)
}

const buscarTodos = async() =>{
    const data = axios.get(`http://localhost:8080//API/v1.0/Universidad/materias`).then(r=> r.data)
    console.log(data)
}
const borrarPorMateria = async(codigo) =>{
    const data = axios.delete(`http://localhost:8080//API/v1.0/Universidad/materias/${codigo}`).then(r=> r.data)
    console.log(data)
}

const actualizar = async(materiaBody,codigo) =>{
    const data = axios.get(`http://localhost:8080//API/v1.0/Universidad/materias/${codigo}`,materiaBody).then(r=> r.data)
    console.log(data)
}

export const agregarMateriaFachada = async(materiaBody) =>{
    const data = await this.agregarMateria(materiaBody)
    console.log(data)
}

export const buscarPorCodigoFachada = async(codigo) =>{
    const data = await this.buscarPorCodigo(codigo)
    console.log(data)
}

export const buscarTodosFachada = async() =>{
    const data = await this.buscarTodos()
    console.log(data)
}
export const borrarPorMateriaFachada = async(codigo) =>{
    const data = await this.borrarPorMateria(codigo)
    console.log(data)
}

export const actualizarFachada = async(materiaBody,codigo) =>{
    const data = await this.actualizar(materiaBody,codigo)
    console.log(data)
}




