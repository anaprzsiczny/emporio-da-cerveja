import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/header';
import { BebidasI } from '../types/typeshome';

const Home = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))
  const [categorias, setCategorias] = useState<string[]>([])
  const [bebidas, setBebidas] = useState<BebidasI[]>()

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  useEffect(() => {
    axios.get('http://localhost:4000/categories', {headers: headers})
      .then(resposta => setCategorias(resposta.data))
  }, [])

  useEffect(() => {
    axios.get('http://localhost:4000/beers', {headers: headers})
      .then(resposta => setBebidas(resposta.data))
  }, [])

  return (
    <>
      <Header />
      { 
        !token &&
        <Redirect to="/cadastro" />
      }
      
      {
        categorias !== null &&
        categorias.map((item: string) => (
          <div key={item}>
            <p>{item}</p>
          </div>
        ))
      }

      {
        bebidas !== undefined &&
        bebidas.map((item: BebidasI) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} />
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button><Link to="/carrinho">Comprar</Link></button>
          </div>
        ))
      }
    </>
  )
}

export default Home