import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Alimento from './components/alimento'
import Home from './pages/home'
import Detalhes from './pages/detalhes'
import Carrinho from './pages/carrinho'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/alimento" exact={true} component={Alimento} />
                <Route path="/detalhe" exact={true} component={Detalhes} />
                <Route path="/carrinho" exact={true} component={Carrinho} />
            </Switch>
        </BrowserRouter>
    )
}
