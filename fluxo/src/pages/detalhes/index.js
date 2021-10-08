import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Container from './styled'
import Cookie from 'js-cookie'

export default function Detalhes(props){

    const [alimento, setAlimentos] = useState(props.location.state)
    const navegar = useHistory();


    function comprar(){

        let carrinho = Cookie.get('carrinho')
        carrinho = carrinho !== undefined
                            ? JSON.parse(carrinho)
                            : [];

        if (carrinho.some(item => item.id === alimento.id) === false )
            carrinho.push( {...alimento, qtd:1} )

        Cookie.set('carrinho', JSON.stringify(carrinho));

        
        navegar.push('/carrinho')
    }

    return(
        <Container>
            <Link to="/"> <button> Voltar </button> </Link>
            <h1> Detalhes do Pedido </h1>
            <div className="details">
                <div className="info-esquerda">
                    <img src={alimento.imagem} alt="" />
                    <h1> {alimento.titulo} </h1>
                    <h2> {alimento.preco} </h2>
                </div>
                <div className="info-direita">
                    <h2>Descrição</h2>
                    <div> {alimento.descricao} </div>

                    <h2>Especificacoes</h2>
                    <div> {alimento.especificacoes} </div>

                    <button onClick={comprar} > Comprar </button>
                </div>
            </div>
        </Container>
    )
}