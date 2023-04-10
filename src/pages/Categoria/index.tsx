import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store';
import { ICategoria } from '../../store/reducers/categorias';

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const categoria: ICategoria | undefined = useSelector((state: RootState) =>
    state.categorias.find((categoria) => categoria.id === nomeCategoria)
  );

  if (!categoria) {
    throw new Error('Categoria não encontrada');
  }

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
    </div>
  );
}
