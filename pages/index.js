import styles from '../styles/Home.module.css'
import Scoreboard from '../components/scoreboard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Scoreboard rsnName="NBCSN Boston"/>
    </div>
  )
}
