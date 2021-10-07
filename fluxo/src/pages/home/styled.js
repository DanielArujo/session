import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding:  2em;
    align-items: center;

button{
    border: none;
    color: white;
    background-color: purple;
    border-radius: 10px;
    padding: 0.5em 1em;

    cursor: pointer;

}

button:hover{
    background-color: red;
}

.box-principal{
    display: flex;
    flex-direction: column;
    align-items: center;
}


`




export default Container;