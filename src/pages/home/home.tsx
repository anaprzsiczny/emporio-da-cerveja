import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from '../../components/header';
import { postBeer } from '../../store/ducks/bebidas/actions';
import { BebidasI } from '../../types/typeshome';
import toast, { Toaster } from 'react-hot-toast'
import {FiShoppingCart} from 'react-icons/fi';
import {IoMdBeer} from 'react-icons/io';
import './home.scss';

const Home = () => {

  const dispatch = useDispatch()

  const [token] = useState<string | null>(localStorage.getItem("token"))
  const [categorias, setCategorias] = useState<string[]>([])
  const [bebidas, setBebidas] = useState<BebidasI[]>()

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  useEffect(() => {
    async function getCategories() {
      try {
        const data: any = await axios.get('http://localhost:4000/categories', {headers: headers})
        setCategorias(data.data)
      } catch(error) {
        if(error.response.status === 404) {
          toast.error('Não foi possível carregar as categorias')
        }
      }
    }

    getCategories()
  }, [])

  useEffect(() => {
    async function getProducts() {
      try {
        const data: any = await axios.get('http://localhost:4000/beers', {headers: headers})
        setBebidas(data.data)
      } catch(error) {
        if(error.response.status === 404) {
          toast.error('Não foi possível carregar os produtos')
        }
      }
    }

    getProducts()
  }, [])

  const buyBeer = (data: BebidasI) => {

    let price = data.price.replace(",",".")
    price = Number(price.replace(/[^0-9.]+/g,""))
    price = Number(price.toFixed(2))
    console.log(price)

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
      <Toaster />
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

      <div className="destaques">
          <IoMdBeer className="icon-beer"/>
          <span>Destaques no Empório</span>
      </div>

      <div className="home-cards">
        {
          bebidas !== undefined &&
          bebidas.map((item: BebidasI) => (
            <div key={item.id} className="home-cards-item">
              <img src={item.image} />
              <p className="description">{item.description}</p>
              <p>{item.title}</p>              
              <p className="price">{item.price}</p>
              <Link to="/carrinho" onClick={() => buyBeer(item)} className="button-adicionar"><span>Adicionar </span><FiShoppingCart/></Link>
            </div>
          ))
        }
      </div>
      <footer className="footer">
        <img width="70" alt="Logo" src="assets/logo.svg" />
        <span>Empório da Cerveja - 2021</span>
      </footer>
    </>
  )
}

export default Home