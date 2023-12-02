import Logo from '/Logo.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="Logo" />
    </header>
  )
}