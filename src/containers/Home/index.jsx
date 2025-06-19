import React from 'react';

function Home() {
  return (
    <div style={
        { 
            backgroundColor: '#ecdbbc',
            height: '100vh',
            padding: '20px', 
            fontFamily: 'Arial, sans-serif', 
            fontSize: '14px',
            color: '#333',}}>
        <h1 style={{ fontSize: '24px', color: '#595b5a' }}>
            Bem-vindo ao React!</h1>
        
      <h1>Página de Teste com React</h1>

      <p style={{ lineHeight: '1.5', 
        fontSize: '10px',
        color: '#595b5a'  
      }}>
        React é uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário de forma eficiente, declarativa e baseada em componentes. Ele permite criar aplicações web de maneira mais rápida e organizada, dividindo a interface em pequenos blocos reutilizáveis chamados de componentes.
      </p>
    </div>
  );
}

export default Home;
