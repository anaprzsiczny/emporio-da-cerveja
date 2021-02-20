import { Route, Switch } from 'react-router-dom'
import Cadastro from './pages/cadastro/cadastro'
import Carrinho from './pages/carrinho/carrinho'
import Home from './pages/home/home'

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