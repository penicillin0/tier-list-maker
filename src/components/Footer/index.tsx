import styles from './styles.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 Tier List Maker</p>
      </div>
    </footer>
  )
}
