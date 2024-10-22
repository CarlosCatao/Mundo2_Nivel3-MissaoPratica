import Head from 'next/head';
import Menu from '../componentes/Menu';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Loja Next</title>
       </Head>

      <Menu />

      <main>
        <h1 className={styles.title}>
            Loja Next
            <br></br>
            Página Inicial
          </h1>
      </main>
    </div>
  );
};

export default Home;
