import classNames from 'classnames';
import styles from './Header.module.scss';
import TituloSemImagem from './TituloSemImagem';
import TituloComImagem from './TituloComImagem';

function Header({
  titulo,
  descricao,
  className = '',
  imagem,
  children
}: {
  titulo: string;
  descricao: string;
  className?: string;
  imagem?: string,
  children?: any
}) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        >
          {children}
        </TituloSemImagem>
      }
      {titulo && imagem &&
        <TituloComImagem 
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >
          {children}
        </TituloComImagem>
      }
    </header>
  );
}

export default Header;
