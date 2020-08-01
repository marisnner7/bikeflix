import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'

function CadastroCategoria() {
  
const [ nomeDaCategoria, setNomeDaCategoria] = useState('filmes');
 
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria} </h1>
      <form >
        <div>
            <label>
              Nome da Categoria: 
              <input
                type="text"
                  onChange={ function handleSubmit(e){
                      console.log(e.target.value)
                      setNomeDaCategoria(e.target.value)              
                  }}
                />
                
            </label>
        </div>

        <button>
          Cadastrar
        </button>

       


      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;