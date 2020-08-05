import React, { Fragment } from 'react'
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
function pagina404(){
  return(
    <PageDefault>
      <Fragment>

        <div>Pagina não encontrada </div>

      <Button>

        <Link to="/">
          Ir para home
        </Link>
      </Button>
    </Fragment>
      </PageDefault>

  
    
  )
}

export default pagina404;
