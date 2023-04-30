import { forwardRef } from 'react';
import styles from './Input.module.scss';

function Input(
  {
    value,
    onChange,
    ...props
  }: {
    value?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    alt?: string;
    type?: string;
  },
  ref: React.LegacyRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      {...props}
      className={styles.input}
    />
  );
}

export default forwardRef(Input);
