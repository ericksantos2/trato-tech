import { Iitem, mudarFavorito } from '../../store/reducers/itens';
import styles from './Item.module.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho } from '../../store/reducers/carrinho';
import { RootState } from '../../store';
import classNames from 'classnames';

const iconeProps = {
  size: 24,
  color: '#041833',
};

interface Props extends Iitem {
  carrinho?: boolean;
}

export default function Item(props: Props) {
  const { titulo, foto, preco, descricao, favorito, id, carrinho } = props;
  if (!preco) {throw new Error('há props necessárias que não foram passadas')};
  const dispatch = useDispatch();
  const estaNoCarrinho = useSelector((state: RootState) => state.carrinho.some((itemNoCarrinho: Iitem) => itemNoCarrinho.id === id));

  function resolverFavorito() {
    dispatch(mudarFavorito(id))
  }

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id))
  }

  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: carrinho
    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>R$ {preco.toFixed(2)}</div>
          <div className={styles['item-acoes']}>
            {favorito ? (
              <AiFillHeart
                {...iconeProps}
                color='#ff0000'
                className={styles['item-acao']}
                onClick={resolverFavorito}
              />
            ) : (
              <AiOutlineHeart
                {...iconeProps}
                className={styles['item-acao']}
                onClick={resolverFavorito}
              />
            )}
            <FaCartPlus
              {...iconeProps}
              color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
              className={styles['item-acao']}
              onClick={resolverCarrinho}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
