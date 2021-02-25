import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | `eye`;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challegesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengedProviderProps {
  children: ReactNode;
}

export const ChallengedContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengedProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(10);
  const [challegesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengedContext.Provider
      value={{
        level,
        currentExperience,
        challegesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengedContext.Provider>
  );
}
