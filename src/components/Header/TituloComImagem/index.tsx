import styles from './TituloComImagem.module.scss';
import classNames from 'classnames';

export default function TituloComImagem({
  titulo,
  descricao,
  imagem,
  className = '',
  children,
}: {
  titulo: string;
  descricao: string;
  imagem: string;
  className?: string;
  children?: any;
}) {
  return (
    <div
      className={classNames({
        [className]: true,
        [styles.header]: true,
      })}
    >
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      {children}
      <div className={styles['header-imagem']}>
        <img src={imagem} alt={titulo} />
      </div>
    </div>
  );
}
