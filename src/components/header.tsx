import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'

const Header = () => {
  return (
    <div className="container-header">
      <div className="images">
        <Link to="/"><img width="70" alt="Logo" src="assets/logo.svg" /></Link>
        <Link to="/"><img width="100" alt="Logo" src="assets/logo-nome.svg" /></Link>
      </div>

      <div className="paragrafo">
        <span>A maior <a href="/" className="link">Loja especializada de Cervejas</a> do Brasil.</span>
      </div>

      <div className="carrinho">
        <p><Link to="/carrinho" className="link">Vazio :(</Link></p>
      </div>
    </div>
  )
}

export default Header