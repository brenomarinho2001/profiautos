import React, { useState } from 'react';
import axios from 'axios';
import vezinho from '../imgs/vz.png';
import { Link } from 'react-router-dom';

const Presenca = () => {
  const [cpf, setCpf] = useState('');
  const [nome,setNome] = useState('')
  const [curso, setCurso] = useState('');
  const [inputError, setInputError] = useState('');
  const [etapa, setEtapa] = useState(-1);
  const [tipoDeCurso, setTipoDeCurso] = useState('');
  const [mostrar, setMostrar] = useState(<p>oi</p>);



  const onSubmit = (e) => {
    const data = {
      cpf,
      curso,
      nome
    };
    enviarPresenca(curso, cpf,nome);
  };

  function cpfIsValid(e) {
    e.preventDefault();
    if (cpf.length !== 11) {
      setInputError('CPF deve ter 11 dígitos');
      return;
    }
    setInputError('');
    alertas()
    onSubmit();
  }

  function alertas(){
    if(inputError == ''){
      return(
        <p style={{display:'none'}}>{inputError}</p>
      )
      
    }
    else{
      return(
        <p >{inputError}</p>  
      )
      
    }
  }

  const enviarPresenca = async (curso, cpf,nome) => {
    console.log(curso, cpf);
    try {
      const response = await axios.post('http://localhost:1337/api/presencas', {
        data: {
          curso: curso,
          cpf: cpf,
          nome:nome
        },
      });
      console.log(response.data); // Exibe a resposta da API no console
      setEtapa(etapa + 1);
    } catch (error) {
      console.error(error);
    }
  };

  function aumentarEtapa(e) {
    e.preventDefault();
    setEtapa(etapa + 1);
  }

  function qualCurso(n) {
    console.log(n);
    setTipoDeCurso(n);
    setEtapa(etapa + 1);
  }

  function etapaMostrar() {
    if (etapa === -1) {
      return (
        <form onSubmit={aumentarEtapa}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginBottom: '10px' }}>Qual é o seu curso?</label>
            <button
              onClick={() => qualCurso('motocicleta')}
              style={{ padding: '20px', marginBottom: '10px' }}
            >
              Motocicleta
            </button>
            <button
              onClick={() => qualCurso('veicular')}
              style={{ padding: '20px', marginBottom: '10px' }}
            >
              Veicular
            </button>
            <button
              onClick={() => qualCurso('gastronomia')}
              style={{ padding: '20px', marginBottom: '10px' }}
            >
              Gastronomia
            </button>
          </div>
        </form>
      );
    } else if (etapa === 0) {
      if (tipoDeCurso === 'motocicleta') {
        return (
          <form onSubmit={aumentarEtapa}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '10px' }}>Qual é o seu curso?</label>
              <select
                style={{ marginBottom: '10px', padding: '15px' }}
                id="curso"
                onChange={(e) => setCurso(e.target.value)}
                required
              >
                <option value="">Selecione um curso</option>
                <option value="Gastronomia 1">Gastronomia 1</option>
                <option value="Gastronomia 2">Gastronomia 2</option>
                <option value="PIZZA">PIZZA</option>
              </select>
              <button type="submit">Próxima</button>
            </div>
          </form>
        );
      }

      if (tipoDeCurso === 'veicular') {
        return (
          <form onSubmit={aumentarEtapa}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '10px' }}>Qual é o seu curso?</label>
              <select
                style={{ marginBottom: '10px', padding: '15px' }}
                id="curso"
                onChange={(e) => setCurso(e.target.value)}
                required
              >
                <option value="">Selecione um curso</option>
                <option value="Mecânica de Carros">Mecânica de Carros</option>
                <option value="Mecânica de Motos">Mecânica de Motos</option>
                <option value="Eletrônica Automotiva">Eletrônica Automotiva</option>
              </select>
              <button type="submit">Próxima</button>
            </div>
          </form>
        );
      }

      if (tipoDeCurso === 'gastronomia') {
        return (
          <form onSubmit={aumentarEtapa}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '10px' }}>Qual é o seu tipo de curso?</label>
              <select
                style={{ marginBottom: '10px', padding: '15px' }}
                id="curso"
                onChange={(e) => setCurso(e.target.value)}
                required
              >
                <option value="">Selecione um curso</option>
                <option value="Moto 1">Moto 1</option>
                <option value="Moto 2">Moto 2</option>
                <option value="Moto 3">Moto 3</option>
              </select>
              <button type="submit">Próxima</button>
            </div>
          </form>
        );
      }
    } else if (etapa === 1) {
      return (
        <form id="formulario" onSubmit={cpfIsValid}>
          <div className="forms">
    
    <div className="form-group">
    <label htmlFor="cpf">Seu Nome:</label>
    <input
        type="text"
        id="cpf"
        placeholder={cpf}
        onChange={(e) => setNome(e.target.value)}
        required

        style={{height:'50px'}}
      ></input>
      <label htmlFor="cpf">CPF:</label>
      <input
        type="text"
        id="cpf"
        placeholder={cpf}
        onChange={(e) => setCpf(e.target.value)}
        required

        style={{height:'50px'}}
      ></input>
      <div>{alertas()}</div>
      <button type="submit" style={{width:'100%',padding:'20px',marginTop:'20px'}}>Enviar</button>
    </div>
    
    
  </div>
        </form>
      );
    } else if (etapa === 2) {
      return (
        <form>
          <p>Presença Registrada!</p>
          <div>
            <Link to={'/'} style={{display:'flex',justifyContent:'center'}}><img src={vezinho} className='imagevezinho'/></Link>
          </div>
        </form>
      );
    }
  }

  return (
    <div className="container">
      {/* <p>{etapa}</p> */}
      {etapaMostrar()}
    </div>
  );
};

export default Presenca;
