
import Container from "./styled"


export default function Alimento(){
    return(
        <Container>
            <img className="foto" src="../assets/images/burgao.svg" alt="" />
            <div className="titulo"> BigJadde </div>
            <div className="preco"> 20.00 </div>

            <button> Ver detalhes </button>
        </Container>
    )
}