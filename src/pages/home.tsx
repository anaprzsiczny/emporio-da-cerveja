import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/header';
import { postBeer } from '../store/ducks/bebidas/actions';
import { BebidasI } from '../types/typeshome';
import {FiShoppingCart} from 'react-icons/fi'
import './home.scss'

const Home = () => {

  const dispatch = useDispatch()

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

  const buyBeer = (data: BebidasI) => {

    let price = data.price.replace(",",".")
    price = Number(price.replace(/[^0-9.]+/g,""))
    price = Number(price.toFixed(2))

    const newBeer = {
      description: data.description,
      id: data.id,
      image: data.image,
      price: price,
      title: data.title,
      quantidade: 1,
      precoBase: price
    }

    dispatch(postBeer(newBeer))
  }

  return (
    <>
      <Header />
      { 
        !token &&
        <Redirect to="/cadastro" />
      }
      
      <div className="home-categorias">
        {
          categorias !== null &&
          categorias.map((item: string) => (
            <div key={item} className="home-categoria-item">
              <p>{item}</p>
            </div>
          ))
        }
      </div>
      <div className="submenu"></div>

      {
        bebidas !== undefined &&
        bebidas.map((item: BebidasI) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} />
            <p>{item.price}</p>
            <p>{item.description}</p>
            <Link to="/carrinho" onClick={() => buyBeer(item)}><FiShoppingCart/>Comprar</Link>
          </div>
        ))
      }
    </>
  )
}

export default Home