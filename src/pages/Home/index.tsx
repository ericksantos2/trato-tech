import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import styles from './Home.module.scss';
import relogio from '@/assets/inicial.png';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';

const descricao = 'Compre diversos tipos de produtos no melhor site do Brasil!';

export default function Home() {
  const navigate = useNavigate();
  const categorias = useSelector((state: RootState) => state.categorias);
  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao={descricao}
        imagem={relogio}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>Categorias</h1>
        </div>
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => {navigate(`/categoria/${categoria.id}`)}}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
