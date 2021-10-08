
import { Link } from "react-router-dom"
import Container from "./styled"


export default function Alimento(props){
    return(
        <Container>
            <img className="foto" src={props.info.imagem} alt="" />
            <div className="titulo"> {props.info.titulo} </div>
            <div className="preco"> {props.info.preco} </div>
            <Link to={{
                pathname:"/detalhe",
                state: props.info
            }}>
              <button> Ver detalhes </button>
            </ Link>   
        </Container>
    )
}