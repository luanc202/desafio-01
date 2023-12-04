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
      {tasks.filter((task) => task.isCompleted == false).map(task => (
        <TaskItem handleRemoveTask={handleRemoveTask} handleTaskToggle={handleTaskToggle} task={task} key={task.id} />
      ))}
      {tasks.filter((task) => task.isCompleted == true).map(task => (
        <TaskItem handleRemoveTask={handleRemoveTask} handleTaskToggle={handleTaskToggle} task={task} key={task.id} />
      ))}
    </div>
    
  )
}
