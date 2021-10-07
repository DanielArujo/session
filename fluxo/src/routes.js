import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Alimento from './components/alimento'
import Home from './pages/home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/alimento" exact={true} component={Alimento} />
            </Switch>
        </BrowserRouter>
    )
}
