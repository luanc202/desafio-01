import styles from './TaskList.module.css'
import { Task } from '../../App';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  handleTaskToggle: (id: number) => void;
  handleRemoveTask: (id: number) => void;
}

export default function TaskList({ tasks, handleRemoveTask, handleTaskToggle }: Props) {

  return (
    <div className={styles.container}>
      {tasks.map(task => (
        <TaskItem handleRemoveTask={handleRemoveTask} handleTaskToggle={handleTaskToggle} task={task} key={task.id} />
      ))}
    </div>
  )
}
