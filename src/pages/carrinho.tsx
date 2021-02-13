import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';

const Carrinho = () => {

  const [token] = useState<string | null>(localStorage.getItem("token"))

  return (
    <>
      <Header />
      { 
        !token &&
        <Redirect to="/cadastro" />
      }
    </>
  )
}

export default Carrinho