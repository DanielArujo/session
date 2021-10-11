import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import Container from "./styled"
import ItemCarrinho from "../../components/itemCarrinho"
import { Link } from "react-router-dom"


export default function Carrinho(){

    const [alimento, setAlimentos] = useState([])

    useEffect(carregarCarrinho, []);
    
    function carregarCarrinho(){

        let carrinho = Cookies.get('carrinho');
        carrinho = carrinho !== undefined
                            ? JSON.parse(carrinho)
                            : []

        setAlimentos(carrinho)

    }


    return(
        <Container>
            <Link to='/'> 
                <button> Voltar </button>
            </Link>

            <br />
            <div className="item">
                {alimento.map( item => <ItemCarrinho info={item} />)}
            </div>
        </Container>
    )
}