import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import styles from './Home.module.scss';
import relogio from '@/assets/inicial.png';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import Button from '../../components/Button';
import { useEffect } from 'react';
import { buscarCategorias } from '../../store/reducers/categorias';
import { buscarItens } from '../../store/reducers/itens';

const descricao = 'Compre diversos tipos de produtos no melhor site do Brasil!';

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categorias = useSelector((state: RootState) => state.categorias);

  useEffect(() => {
    const categorias: any = buscarCategorias;
    const itens: any = buscarItens
    // tive que fazer uma const por causa do erro de tipagem
    // coloquei any porque eu não consegui tipar e também o tipo disso não muda muita coisa
    dispatch(categorias());
    dispatch(itens());
  }, [dispatch]);

  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao={descricao}
        imagem={relogio}
        className={styles.header}
      >
        <Button onClick={() => navigate('/anuncie')}>
          Quero anunciar
        </Button>
      </Header>
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
