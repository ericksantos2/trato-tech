import styles from './TituloComImagem.module.scss';
import classNames from 'classnames';

export default function TituloComImagem({
  titulo,
  descricao,
  imagem,
  className = '',
}: {
  titulo: string,
  descricao: string,
  imagem: string,
  className?: string
}) {
  return (
    <div className={classNames({
      [className]: true,
      [styles.header]: true,
    })}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles['header-imagem']}>
        <img src={imagem} alt={titulo} />
      </div>
    </div>
  );
}
