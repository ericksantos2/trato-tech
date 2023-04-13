import classNames from 'classnames';
import styles from './Header.module.scss';
import TituloSemImagem from './TituloSemImagem';
import TituloComImagem from './TituloComImagem';

function Header({
  titulo,
  descricao,
  className = '',
  imagem
}: {
  titulo: string;
  descricao: string;
  className?: string;
  imagem?: string
}) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        />
      }
      {titulo && imagem &&
        <TituloComImagem 
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      }
    </header>
  );
}

export default Header;
