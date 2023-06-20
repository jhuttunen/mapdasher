import React from 'react';
import { Content, Sidebar, Header, Footer } from './';

const Layout =({sidebar, content}) =>{
  return(
    <>
      <main className="flex flex-col h-screen md:flex-row">
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