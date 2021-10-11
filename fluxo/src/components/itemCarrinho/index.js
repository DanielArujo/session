import { useState } from "react";
import Container from "./styled";
import { Link } from "react-router-dom";

export default function ItemCarrinho(props){

    const [alimento, setAlimentos] = useState(props.info)

    return(
        <Container>
            <img src={alimento.imagem} alt='' />
            <div> {alimento.titulo} </div>
            <div> {alimento.preco} </div>
        </Container>
    )
}