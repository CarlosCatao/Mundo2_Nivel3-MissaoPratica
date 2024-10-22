import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

        <div>

            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/">Catálogo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dados">Novo</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-5 pt-5">

                {/* Definição das Rotas */}
                <Routes>
                    <Route path="/" element={<LivroLista />} />
                    <Route path="/dados" element={<LivroDados />} />
                </Routes>

            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
