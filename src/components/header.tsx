import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container-header">
      <div className="container-header images">
        <div ><Link to="/"><span><img width="70" alt="Logo" src="assets/logo.svg" /></span></Link></div>
        <div ><Link to="/"><span><img width="100" alt="Logo" src="assets/logo-nome.svg" /></span></Link></div>
      </div>

      <div className="container-header paragrafo">
        <p>A maior <Link to="/">Loja especializada de Cervejas</Link> do Brasil.</p>
      </div>

      <div className="container-header carrinho">
        <p><Link to="/carrinho">Vazio :(</Link></p>
      </div>
    </div>
  )
}

export default Header