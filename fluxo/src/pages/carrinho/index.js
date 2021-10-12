import Cookie from "js-cookie"
import { useEffect, useState } from "react"
import Container from "./styled"
import ItemCarrinho from "../../components/itemCarrinho"
import { Link } from "react-router-dom"


export default function Carrinho(){

    const [alimento, setAlimentos] = useState([])

    useEffect(carregarCarrinho, []);
    
    function carregarCarrinho(){

        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                            ? JSON.parse(carrinho)
                            : []

        setAlimentos(carrinho)

    }

    function deletarPedido(id){
        let carrinho = alimento.filter(item => item.id !== id)
        Cookie.set('carrinho', JSON.stringify(carrinho))

        setAlimentos([...carrinho])
    }

    function alterarPedido(id, qtd){
        let alteracao = alimento.filter( item => item.id === id)[0]
        alteracao.qtd = qtd;
        
        Cookie.set('carrinho', JSON.stringify(alimento))
    }


    return(
        <Container>
            <Link to='/'> 
                <button> Voltar </button>
            </Link>

            <br />
            <div className="item">
                {alimento.map( item => 
                    <ItemCarrinho key={item.id} 
                                info={item} 
                                onDelete={deletarPedido} 
                                onUpdate={alterarPedido} />
                )}
            </div>
        </Container>
    )
}