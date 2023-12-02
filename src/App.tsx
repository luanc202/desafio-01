import Form from './components/Form';
import Header from './components/Header';
import styles from './App.module.css'
import Button from './components/Button';

function App() {

  return (
    <>
      <main>
        <Header />

        <div className={styles.content}>
          <div className={styles.taskCreationContainer}>
            <Form />
            <Button />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
