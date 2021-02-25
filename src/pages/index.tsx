import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallengeds } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import Styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={Styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallengeds />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
