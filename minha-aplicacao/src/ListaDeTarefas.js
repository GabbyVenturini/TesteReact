import React from 'react';
import './ListaDeTarefas.css';  // 👈 Importando o CSS

function ListaDeTarefas() {
  const tarefas = [
    '✅ Estudar React',
    '✅ Fazer o exercício de programação',
    '✅ Ler um livro',
    '✅ Praticar inglês'
  ];

  return (
    <div className="container-tarefas">
      <h2>📋 Minha Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
