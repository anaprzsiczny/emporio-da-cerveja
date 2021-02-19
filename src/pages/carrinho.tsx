import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import { addBeer, deleteBeer, finishOrder, removeBeer } from '../store/ducks/bebidas/actions';
import { Beers } from '../store/ducks/bebidas/types';
import {FiTrash2, FiPlus, FiMinus} from 'react-icons/fi'

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

      {
        arrayBebidas &&
        arrayBebidas.map((item: Beers) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>R$ {item.price}</p>
            <p>{item.quantidade}</p>
            <FiPlus onClick={() => adicionar(item)}/>
            <FiMinus onClick={() => remover(item)}/>
            <FiTrash2 onClick={() => deletar(item)}/>
          </div>
        ))
      }
      {
        precoTotal !== 0 &&
        <div>
          <p>Valor Total: R$ {precoTotal}</p>
          <button onClick={finalizar}>Finalizar Compra</button>
        </div>
      }
    </>
  )
}

export default Carrinho