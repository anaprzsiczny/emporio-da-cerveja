import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../components/header';
import { addBeer, deleteBeer, finishOrder, removeBeer } from '../../store/ducks/bebidas/actions';
import { Beers } from '../../store/ducks/bebidas/types';
import {FiTrash2, FiPlus, FiMinus} from 'react-icons/fi'
import './carrinho.scss'

const Carrinho = () => {

  const dispatch = useDispatch()

  const [token] = useState<string | null>(localStorage.getItem("token"))

  const {arrayBebidas, precoTotal} = useSelector((state: any) => state)

  const adicionar = (data: Beers) => {
    dispatch(addBeer(data))
  }

  const remover = (data: Beers) => {
    dispatch(removeBeer(data))
  }

  const deletar = (data: Beers) => {
    dispatch(deleteBeer(data))
  } 

  const finalizar = () => {
    dispatch(finishOrder())
    alert('Seu pedido foi realizado!')
  }
  
  return (
    <>
      <Header />
      { 
        !token &&
        <Redirect to="/cadastro" />
      }

      <div className="container-carrinho">

        <div className="submenu"></div>

        <p className="meu-carrinho">Meu Carrinho</p>

        <div className="carrinho-finalizar">
          {
            arrayBebidas &&
            arrayBebidas.map((item: Beers) => (
              <div key={item.id} className="card-carrinho">
                <img src={item.image} />
                <div className="info-item"> 
                  <p>{item.title}</p>
                  <p className="item-price">R$ {item.price}</p>
                </div>
                <div className="button-item">
                  <FiPlus onClick={() => adicionar(item)}/>
                  <span>{item.quantidade}</span>
                  <FiMinus onClick={() => remover(item)}/>
                </div>
                <div className="delete-item">
                  <FiTrash2 onClick={() => deletar(item)}/>
                </div>
              </div>
            ))
          }
        </div>

        {
          precoTotal !== 0 &&
          <div className="finish">
            <p className="final-value">Valor Total: R$ {precoTotal}</p>
            <button onClick={finalizar} className="button-finish">Finalizar Compra</button>
          </div>
        }

        <footer className="footer">
          <img width="70" alt="Logo" src="assets/logo.svg" />
          <span>Empório da Cerveja - 2021</span>
        </footer>

      </div>
    </>
  )
}

export default Carrinho