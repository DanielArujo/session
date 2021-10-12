import { useState } from "react";
import Container from "./styled";
import Contador from "../contador";


export default function ItemCarrinho(props){

    const [alimento, setAlimentos] = useState(props.info)

    function deletar(){
        props.onDelete(alimento.id)
    }

    function alterar(qtd){
        setAlimentos({...alimento, qtd})

        props.onUpdate(alimento.id, qtd)
    }

    return(
        <Container>
            <div className="imagem-item">
                <img src={alimento.imagem} alt='' />
                <Contador onChange={alterar} values={alimento.qtd} />
            </div>
            <div> {alimento.titulo} </div>
            <div> {alimento.preco} </div>
            <div> {alimento.qtd} </div>
            <button onClick={deletar}> Deletar </button>
        </Container>
    )
}