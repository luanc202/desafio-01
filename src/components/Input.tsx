import styles from './Input.module.css'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function Input({...rest}: Props) {
  return (
    <input className={styles.textbox} type="text" placeholder='Adicione uma nova tarefa' {...rest} />
  )
}
