import React from 'react';
import { Content, Sidebar, Header, Footer } from './';

const Layout =({sidebar, content, gameActive}) =>{
  return(
    <>
      <main className="flex flex-col h-screen md:flex-row">
        <Sidebar 
          gameActive={gameActive}
        >
          <Header 
            title="MapDasher" 
          >
          </Header>
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