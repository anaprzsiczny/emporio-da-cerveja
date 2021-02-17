import { Route, Switch } from 'react-router-dom'
import Cadastro from './pages/cadastro'
import Carrinho from './pages/carrinho'
import Home from './pages/home'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/carrinho" exact component={Carrinho} />
    </Switch>
  )
}

export default Routes