import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import styles from './Carrinho.module.scss';
import { RootState } from '../../store';
import Item from '../../components/Item';
import { Iitem } from '../../store/reducers/itens';
import { resetarCarrinho } from '../../store/reducers/carrinho';

export default function Carrinho() {
  const dispatch = useDispatch();
  const { carrinho, total } = useSelector((state: RootState) => {
    let total = 0;
    const regexp = new RegExp(state.busca, 'i');
    const carrinhoReduce = state.carrinho.reduce(
      (itens: Iitem[], itemNoCarrinho: Iitem) => {
        const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
        if (!item || !item.preco) {
          throw new Error('Item não encontrado');
        }
        if (itemNoCarrinho.quantidade === undefined) {
          itemNoCarrinho.quantidade = 0;
        }
        total += item.preco * itemNoCarrinho.quantidade;
        if (item.titulo?.match(regexp)) {
          itens.push({
            ...item,
            quantidade: itemNoCarrinho.quantidade,
          });
        }
        return itens;
      },
      []
    );
    return {
      carrinho: carrinhoReduce,
      total,
    };
  });
  return (
    <div>
      <Header
        titulo='Carrinho de compras'
        descricao='Confira produtos que você adicionou ao carrinho.'
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong> R$ {total.toFixed(2)} </strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
