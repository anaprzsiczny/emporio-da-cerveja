import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import { addBeer, deleteBeer, removeBeer } from '../store/ducks/bebidas/actions';
import { Beers } from '../store/ducks/bebidas/types';

const Carrinho = () => {

  const dispatch = useDispatch()

  const [token] = useState<string | null>(localStorage.getItem("token"))

  const {arrayBebidas} = useSelector((state: any) => state)
  console.log(arrayBebidas)

  const adicionar = (data: Beers) => {
    dispatch(addBeer(data))
  }

  const remover = (data: Beers) => {
    dispatch(removeBeer(data))
  }

  const deletar = (data: Beers) => {
    dispatch(deleteBeer(data))
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
            <button onClick={() => adicionar(item)}>+</button>
            <button onClick={() => remover(item)}>-</button>
            <button onClick={() => deletar(item)}>Remover</button>
          </div>
        ))
      }
    </>
  )
}

export default Carrinho