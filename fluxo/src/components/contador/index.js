
import { useEffect, useState } from "react"
import Container from "./styled"



export default function Contador(props){

    const [qtd, setQtd] = useState(props.values)

    function somar(){
        setQtd(qtd + 1)
    }

    function subtrair(){
        setQtd(qtd - 1)
    }

    useEffect(() => {
        props.onChange(qtd);}, [qtd]    
    )

    return(
        <Container>
            <div className="menos" onClick={subtrair}> - </div>
            <div className="qtd"> {qtd} </div>
            <div className="mais" onClick={somar}> + </div>
        </Container>
    )
}