import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import { Beers } from '../store/ducks/bebidas/types';

const Carrinho = () => {

  const dispatch = useDispatch()

  const [token] = useState<string | null>(localStorage.getItem("token"))

  const bebidas = useSelector((state: any) => state)
  console.log(bebidas)
  return (
    <>
      <Header />
      { 
        !token &&
        <Redirect to="/cadastro" />
      }

      {
        bebidas &&
        bebidas.map((item: Beers) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.quantidade}</p>
            <button>+</button>
            <button>-</button>
            <button>Remover</button>
          </div>
        ))
      }
    </>
  )
}

export default Carrinho