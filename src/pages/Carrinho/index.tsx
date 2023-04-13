import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import styles from './Carrinho.module.scss';
import { RootState } from '../../store';
import Item from '../../components/Item';
import { Iitem } from '../../store/reducers/itens';

export default function Carrinho() {
  const carrinho = useSelector((state: RootState) => {
    const carrinhoReduce = state.carrinho.reduce(
      (itens: Iitem[], itemNoCarrinho: Iitem) => {
        const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
        if (!item) {
          throw new Error('Item não encontrado');
        }
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
        return itens;
      },
      []
    );
    return carrinhoReduce;
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
          <span>Subtotal: <strong> R$ {0.0.toFixed(2)} </strong></span>
        </div>
      </div>
    </div>
  );
}
