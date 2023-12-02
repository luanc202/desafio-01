import Clipboard from '/Clipboard.svg';
import styles from './EmptyList.module.css';

export default function EmptyList() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="clipboard icon" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
