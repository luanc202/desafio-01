import Input from './components/Input';
import Header from './components/Header';
import styles from './App.module.css'
import Button from './components/Button';
import { PlusCircle } from '@phosphor-icons/react';
import ListHeader from './components/TaskList/ListHeader';
import { useState } from 'react';

function App() {
  const [tasksCounter, setTasksCounter] = useState(0);
  const [checkedTasksCounter, setCheckedTasksCounter] = useState(0);

  return (
    <>
      <main>
        <Header />

        <div className={styles.content}>
          <div className={styles.taskCreationContainer}>
            <Input />
            <Button>
              Criar
              <PlusCircle size={16} color='#f2f2f2' weight='bold' />
            </Button>
          </div>

          <div>
            <ListHeader tasksCounter={tasksCounter} checkedTasksCounter={checkedTasksCounter} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
