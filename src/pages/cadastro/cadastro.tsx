import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'

import './cadastro.scss';

const Cadastro = () => {

  const inputNome = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputSenha = useRef<HTMLInputElement>(null)
  const inputIdade = useRef<HTMLInputElement>(null)

  const [menorDeIdade, setMenorDeIdade] = useState<String>("")
  const [cadastro, setCadastro] = useState<Boolean>(false)
  const [errorMessage, setErrorMessage] = useState<Boolean>(false)

  const Cadastrar = () => {

    const requisicao = {
      name: inputNome.current?.value,
      email: inputEmail.current?.value,
      password: inputSenha.current?.value,
      age: inputIdade.current?.value
    }

    const idade = inputIdade.current?.value

    if (idade && idade < "18"){
      setMenorDeIdade("Não é permitido o cadastro de menores de 18 anos!")
      return
    }

    async function registerUser() {
      try {
        const data: any = await axios.post('http://localhost:4000/register', requisicao)
        localStorage.setItem("token", data.data.accessToken)
        toast.success('Cadastro realizado com sucesso!')
        setCadastro(true)
      } catch(error) {
        if(error.response.status === 404) {
          setErrorMessage(true)
          toast.error('Não foi possível completar sua solicitação. Tente novamente.')
        }
      }
      
    }

    registerUser()   
    
}

  return (
    <div className="cadastro">
      <Toaster />
      <img width="100" alt="Logo" src="assets/logo-nome.svg" />
      <br />
      <input type="text" placeholder="Nome" ref={inputNome}></input>
      <input type="email" placeholder="E-mail" ref={inputEmail}></input>
      <input type="password" placeholder="Senha" ref={inputSenha}></input>
      <input type="number" placeholder="Idade" ref={inputIdade}></input>
      <button onClick={Cadastrar} className="button">Cadastrar</button>
      {
        cadastro === true ?
          <Redirect to="/" />
        : <p>{menorDeIdade}</p>
      }
    </div>
  )
}

export default Cadastro