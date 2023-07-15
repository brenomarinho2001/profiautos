import React, { useState } from 'react'
import logo from '../imgs/profiautos_logo.png'

import axios from 'axios';

const Presenca = () => {

  const [cpf,setCpf] = useState('')
  const [curso,setCurso] = useState('') 
  const [inputError, setInputError] = useState('')

  const onSubmit = (e) => {

    const data = {
        cpf,
        curso
    }
    enviarPresenca(curso,cpf)
  }

  function cpfIsValid(e){
    e.preventDefault();
    if(cpf.length != 11){
      setInputError('CPF deve ter 11 digitos')
      return
    }
    setInputError('')
    onSubmit()
  }

  const enviarPresenca = async (curso, cpf) => {
    console.log(curso,cpf)
    try {
      const response = await axios.post('http://localhost:1337/api/presencas', {
        data:{
            curso:curso,
            cpf:cpf
        }
        
      });
      console.log(response.data); // Exibe a resposta da API no console
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="container">
    <form id="formulario" onSubmit={cpfIsValid}>
        
    <div className='forms'>
        <div></div>
      <div className="form-group">
        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" placeholder="Digite seu CPF" onChange={(e)=> setCpf(e.target.value)} required></input>
      </div>
      <div className="form-group">
        <label htmlFor="curso">Curso:</label>
        <select id="curso" onChange={(e)=>setCurso(e.target.value)} required>
          <option value="">Selecione um curso</option>
          <option value="Mecânica de Carros">Mecânica de Carros</option>
          <option value="Mecânica de Motos">Mecânica de Motos</option>
          <option value="Eletrônica Automotiva">Eletrônica Automotiva</option>
        </select>
      </div>
      <p>{inputError}</p>
      <button type="submit">Enviar</button>
      </div>
    </form>
    
  </div>
  )
}



export default Presenca