import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({ children, ...rest }: Props) {
  return (
    <button className={styles.button} {...rest}>{children}</button>
  )
}
