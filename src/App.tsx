import Form from './components/Form';
import Header from './components/Header';
import styles from './App.module.css'
import Button from './components/Button';
import { PlusCircle } from '@phosphor-icons/react';

function App() {

  return (
    <>
      <main>
        <Header />

        <div className={styles.content}>
          <div className={styles.taskCreationContainer}>
            <Form />
            <Button>
              Criar
              <PlusCircle size={16} color='#f2f2f2' weight='bold'/>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
