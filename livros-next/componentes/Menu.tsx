import React from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

export const Menu: React.FC = () => {
  return (

    <nav className={styles.menu}>
      <ul>
        <li>
          <Link href="/Home">Home</Link>
        </li>
        <li>
          <Link href="/LivroLista">Catálogo</Link>
        </li>
        <li>
          <Link href="/LivroDados">Novo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;