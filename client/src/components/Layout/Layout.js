import React from 'react';
import { Content, Sidebar, Header } from './';
import Footer from './Footer';

const Layout =({sidebar, content}) =>{
  return(
    <>
      <main style={{ display: 'flex' }}>
        <Sidebar>
          <Header title="MapDasher" />
          {sidebar}
        </Sidebar>
        <Content>
          {content}
        </Content>
        <Footer />
      </main>
    </>
  );
};

export default Layout;