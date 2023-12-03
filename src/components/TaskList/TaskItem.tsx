import styles from './TaskItem.module.css';
import { Task } from '../../App';
import { Check, Trash } from '@phosphor-icons/react';

interface Props {
  task: Task;
  handleTaskToggle: (id: number) => void;
  handleRemoveTask: (id: number) => void;
}

export default function TaskItem({ task, handleRemoveTask, handleTaskToggle }: Props) {
  const checkboxCheckedClassname = task.isCompleted ? styles.checkboxChecked : styles.checkboxUnchecked;
  const paragraphCheckedClassname = task.isCompleted ? styles.paragraphChecked : '';

  return (
    <div className={styles.task}>
      <div>
        <label htmlFor='checkbox' key={task.id} onClick={() => handleTaskToggle(task.id)}>
          <input readOnly type="checkbox" checked={task.isCompleted} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {task.isCompleted && <Check size={12} />}
          </span>

          <p className={`${styles.title} ${paragraphCheckedClassname}`}>{task.title}</p>
        </label>
      </div>

      <button onClick={() => handleRemoveTask(task.id)}>
        <Trash size={16} color='var(--gray-300)' />
      </button>
    </div>
  )
}
