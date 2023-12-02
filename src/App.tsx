import Form from './components/Form';
import Header from './components/Header';
import styles from './App.module.css'

function App() {

  return (
    <>
      <main>
        <Header/>

        <div className={styles.content}>
          <Form/>
        </div>
      </main>
    </>
  )
}

export default App
