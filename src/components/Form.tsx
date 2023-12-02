import styles from './Form.module.css'

export default function Form() {
  return (
    <form className={styles.container}>
      <input className={styles.textbox} type="text" />
      <button>Criar</button>
    </form>
  )
}
