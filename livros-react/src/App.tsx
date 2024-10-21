import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

        <div>

            {/* Navigation bar fixed at the top */}
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

            {/* Add some padding to the top to avoid content being hidden behind the navbar */}
            <div className="container mt-5 pt-5">

                {/* Routes */}
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
