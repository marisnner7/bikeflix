import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';

function pagina404() {
  return (
    <PageDefault>

      <div>Pagina não encontrada </div>

      <Button>

        <Link to="/">
          Ir para home
        </Link>
      </Button>
    </PageDefault>

  );
}

export default pagina404;
