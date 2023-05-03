import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { ICategoria } from '../../store/reducers/categorias';
import { Iitem } from '../../store/reducers/itens';
import styles from './Categoria.module.scss';
import Item from '../../components/Item';
import Button from '../../components/Button';

export default function Categoria() {
  const navigate = useNavigate();
  const { nomeCategoria } = useParams();
  const {
    categoria,
    itens,
  }: { categoria: ICategoria | undefined; itens: Iitem[] } = useSelector(
    (state: RootState) => {
      const regexp = new RegExp(state.busca, 'i');
      return {
        categoria: state.categorias.find(
          (categoria) => categoria.id === nomeCategoria
        ) || {},
        itens: state.itens.filter(
          (item) =>
            item.categoria === nomeCategoria && item.titulo?.match(regexp)
        ),
      };
    }
  );
  if (!categoria) {
    throw new Error('Categoria inexistente!');
  }

  return (
    <div>
      <Header
        titulo={categoria.nome || ''}
        descricao={categoria.descricao || ''}
        imagem={categoria.header}
      >
        <Button onClick={() => navigate(`/anuncie/${nomeCategoria}`)}>
          Quero anunciar
        </Button>
      </Header>
      <div className={styles.itens}>
        {itens?.map((item: Iitem) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
