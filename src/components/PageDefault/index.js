import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;
