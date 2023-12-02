import styles from './Form.module.css'

export default function Form() {
  return (
    <input className={styles.textbox} type="text" placeholder='Adicione uma nova tarefa' />
  )
}
