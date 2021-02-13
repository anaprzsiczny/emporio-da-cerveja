import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Cadastro = () => {

  const inputNome = useRef<HTMLInputElement>(null)
  const inputEmail = useRef<HTMLInputElement>(null)
  const inputSenha = useRef<HTMLInputElement>(null)
  const inputIdade = useRef<HTMLInputElement>(null)

  const [menorDeIdade, setMenorDeIdade] = useState<String>("")
  const [cadastro, setCadastro] = useState<Boolean>(false)

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
    } else {
        axios.post('http://localhost:4000/register', requisicao)
          .then(resposta => { 
            localStorage.setItem("token", resposta.data.accessToken)
            setCadastro(true)
        })
      }
}

  return (
    <div>
      <input type="text" placeholder="Nome" ref={inputNome}></input>
      <input type="email" placeholder="E-mail" ref={inputEmail}></input>
      <input type="password" placeholder="Senha" ref={inputSenha}></input>
      <input type="number" placeholder="Idade" ref={inputIdade}></input>
      <button onClick={Cadastrar}>Cadastrar</button>
      {
        cadastro === true ?
        <Redirect to="/" />
        : <p>{menorDeIdade}</p>
      }
    </div>
  )
}

export default Cadastro