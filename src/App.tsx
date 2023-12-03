import Input from './components/Input';
import Header from './components/Header';
import styles from './App.module.css';
import Button from './components/Button';
import { PlusCircle } from '@phosphor-icons/react';
import ListHeader from './components/TaskList/ListHeader';
import { useState } from 'react';
import EmptyList from './components/TaskList/EmptyList';
import TaskList from './components/TaskList/TaskList';

export interface Task {
  title: string;
  isCompleted: boolean;
  id: number;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: Task = {
      title: inputValue,
      isCompleted: false,
      id: tasks.length + 1,
    }

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleTaskToggle(id: number) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  const checkedTasksCounter = tasks.reduce((total, task) => {
    if (task.isCompleted) {
      total += 1;
    }
    return total;
  }, 0);

  return (
    <>
      <main>
        <Header />

        <div className={styles.content}>
          <div className={styles.taskCreationContainer}>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <Button
              onClick={handleAddTask}
            >
              Criar
              <PlusCircle size={16} color='#f2f2f2' weight='bold' />
            </Button>
          </div>

          <div className={styles.tasksList}>
            <ListHeader tasksCounter={tasks.length} checkedTasksCounter={checkedTasksCounter} />

            {tasks.length === 0
              ? <EmptyList />
              : <TaskList handleRemoveTask={handleRemoveTask} handleTaskToggle={handleTaskToggle} tasks={tasks} />
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default App
