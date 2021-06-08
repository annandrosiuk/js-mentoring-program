import { ONE_DAY } from '@enums';
import { Challenge } from '@interfaces';

export const getCurrentChallange = (challenges: Challenge[], challengeId: string): Challenge => {
  return challenges.find((challenge) => challenge.id === challengeId);
};

export const getDayOfChallenge = (startDate: Date): number => {
  if (Number(new Date()) < Number(startDate)) {
    return;
  }
  const differenceMs = Math.abs(Number(startDate) - Number(new Date()));
  return Math.round(differenceMs / ONE_DAY);
};

export const getRandomOrders = (value: number): number[] => {
  const random: number[] = [...new Array(value).keys()]
    .sort(() => Math.random() - 0.5)
    .splice(0, value);
  return random;
};
