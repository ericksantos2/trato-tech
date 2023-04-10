import classNames from 'classnames';
import styles from './Header.module.scss';

function Header({
  titulo,
  descricao,
  className = '',
  imagem
}: {
  titulo: string;
  descricao: string;
  className?: string;
  imagem: string
}) {
  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles['header-texto']}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles['header-imagem']}>
        <img src={imagem} alt={titulo} />
      </div>
    </header>
  );
}

export default Header;
