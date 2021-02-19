import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'

import './header.scss';

const Header = () => {

  const {precoTotal, quantidadeTotal} = useSelector((state: any) => state)

  return (
    <>
      <div className="paragrafo">
        <span>A Maior <Link to="/" className="link-home">Loja especializada de Cervejas</Link> do Brasil.</span>
      </div>

      <div className="container-header">
        <div className="images">
          <Link to="/"><img width="70" alt="Logo" src="assets/logo.svg" /></Link>
          <Link to="/"><img width="100" alt="Logo" src="assets/logo-nome.svg" /></Link>
        </div>

        <div className="carrinho">
          {
            quantidadeTotal == 0 ? 
              <Link to="/carrinho" className="carrinho-vazio">
                <FiShoppingCart/>
                <span>Vazio :(</span>
              </Link>
            : 
            <Link to="/carrinho" className="carrinho-cheio">
              <FiShoppingCart/>
              <span>R$ {precoTotal}</span>
            </Link>
              // {/* <span className="quantidade-carrinho active">{quantidadeTotal}</span> */} 
          }
        </div>
      </div>
    </>
  )
}

export default Header