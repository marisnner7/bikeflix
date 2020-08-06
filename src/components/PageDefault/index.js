import React from 'react';
import styled from 'styled-components';
import Menu from '../menu';
import Footer from '../Footer';
// import { Fragment } from 'react';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children }) {
  return (
    // <Fragment>
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>

  );
}

export default PageDefault;
