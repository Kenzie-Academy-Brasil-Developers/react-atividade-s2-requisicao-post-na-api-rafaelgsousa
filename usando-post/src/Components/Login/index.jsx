import "./style.css"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import axios from "axios";


function Login({setShow}){

    const Schema = yup.object().shape({
        username: yup.string(),
        password: yup.string()
    })

    const {register, handleSubmit } = useForm({resolver:yupResolver(Schema)})

    function enviar(data){
        console.log(data)
        axios.post("https:kenzishop.herokuapp.com/sessions/", data)
        .then(response=>setShow("Requisição completa!"))
        .catch(err=>setShow("Requisição falhou!"))
    }
    
    return (
        <form onSubmit={handleSubmit(enviar)}>
            <input placeholder="User name" {...register("username")}></input>
            <input placeholder="Senha" {...register("password")}></input>
            <button type="submit">Login</button>
        </form>
    )
}
export default Login