import React from 'react';
import './App.css';
import LivroLista from './LivroLista';

function App() {
  return (
    <div className="container">
    {/* Título alinhado à esquerda usando classe CSS */}
    <h1 className="titulo">Catálogo de Livros</h1>

    {/* Componente que lista os livros */}
    <LivroLista />
    
    </div>
  );
}

export default App;
