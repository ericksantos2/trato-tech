import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { ICategoria } from '../../store/reducers/categorias';
import { Iitem } from '../../store/reducers/itens';
import styles from './Categoria.module.scss';

export default function Categoria() {
  const { nomeCategoria } = useParams();

  const {
    categoria,
    itens,
  }: { categoria: ICategoria | undefined; itens: Iitem[] } = useSelector(
    (state: RootState) => ({
      categoria: state.categorias.find(
        (categoria) => categoria.id === nomeCategoria
      ),
      itens: state.itens.filter((item) => item.categoria === nomeCategoria),
    })
  );
  if (!categoria) {throw new Error('Categoria inexistente!')};

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map((item: Iitem) => (
          <div key={item.id}>
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  );
}
