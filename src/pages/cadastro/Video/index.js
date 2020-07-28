import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function CadastroVideo(){
  return(
    <div>
      <PageDefault>
        <h1>Page for Register New Video</h1>
        
        <Link to="/cadastro/categoria">
        Cadastrar Categoria
        </Link>
      </PageDefault>
    </div>
  )
}

export default CadastroVideo;