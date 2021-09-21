import "./style.css"
function Display({show}){
    return(
        <>
            <h2 className={show==="Requisição completa!"?"positivo":"negativo"}>{show}</h2>
        </>
    )
}
export default Display