import { Iitem, mudarFavorito, mudarItem } from '../../store/reducers/itens';
import styles from './Item.module.scss';
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCheck,
  AiFillEdit,
} from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/carrinho';
import { RootState } from '../../store';
import classNames from 'classnames';
import { useState } from 'react';
import Input from '../Input';

const iconeProps = {
  size: 24,
  color: '#041833',
};

const quantidadeProps = {
  size: 32,
  color: '#1875E8',
};

interface Props extends Iitem {
  carrinho?: boolean;
}

export default function Item(props: Props) {
  const { titulo, foto, preco, descricao, favorito, id, carrinho, quantidade } =
    props;
  if (!preco) {
    throw new Error('há props necessárias que não foram passadas');
  }
  const [modoDeEdicao, setModoDeEdicao] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo || '');
  const dispatch = useDispatch();
  const estaNoCarrinho = useSelector((state: RootState) =>
    state.carrinho.some((itemNoCarrinho: Iitem) => itemNoCarrinho.id === id)
  );

  function resolverFavorito() {
    dispatch(mudarFavorito(id));
  }

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  const componenteModoDeEdicao = (
    <>
      {modoDeEdicao ? (
        <AiOutlineCheck
          {...iconeProps}
          className={styles['item-acao']}
          onClick={() => {
            setModoDeEdicao(false);
            dispatch(
              mudarItem({
                id,
                item: { titulo: novoTitulo },
              })
            );
          }}
        />
      ) : (
        <AiFillEdit
          {...iconeProps}
          className={styles['item-acao']}
          onClick={() => setModoDeEdicao(true)}
        />
      )}
    </>
  );

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          {modoDeEdicao ? (
            <Input
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
            />
          ) : (
            <h2>{titulo}</h2>
          )}
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
            {carrinho ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...quantidadeProps}
                  onClick={() => {
                    if (quantidade === 0) return;
                    dispatch(mudarQuantidade({ id, quantidade: -1 }));
                  }}
                />
                <span>{String(quantidade || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle
                  {...quantidadeProps}
                  onClick={() =>
                    dispatch(mudarQuantidade({ id, quantidade: 1 }))
                  }
                />
              </div>
            ) : (
              <>
                <FaCartPlus
                  {...iconeProps}
                  color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                  className={styles['item-acao']}
                  onClick={resolverCarrinho}
                />
                {componenteModoDeEdicao}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
