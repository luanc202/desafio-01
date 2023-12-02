import styles from './ListHeader.module.css'

interface Props {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export default function ListHeader({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className={styles.container}>
      <aside className={styles.taskCount}>
        <p className={styles.taskCountText}>Tarefas criadas</p>
        <span className={styles.countNumber}>{tasksCounter}</span>
      </aside>

      <aside className={styles.taskCount}>
        <p className={styles.taskCompletedText}>Concluídas</p>
        <span className={styles.countNumber}>{tasksCounter === 0
              ? tasksCounter
              : `${checkedTasksCounter} de ${tasksCounter}`
        }</span>
      </aside>
    </header>
  )
}
