import styles from './Button.module.scss';

interface IProps {
  children?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, type = 'button', onClick }: IProps) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
