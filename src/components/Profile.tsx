import { useContext } from 'react';
import { ChallengedContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengedContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/43626534?s=460&u=56e15e81733779dd5ba5adb80c283d9b55a2a4fd&v=4"
        alt="Gustavo Gomes"
      />
      <div>
        <strong>Gustavo Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="level up" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
