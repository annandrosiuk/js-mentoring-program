import { Challenge, ActualAchievement, Achievement } from '../interfaces';
import { getCurrentChallange } from '../utils';

export const getActualAchievements = (
  challengeId: string,
  challengesList: Challenge[]
): ActualAchievement[] => {
  const currentChallenge: Challenge = getCurrentChallange(challengesList, challengeId);

  if (!currentChallenge) {
    return null;
  }

  const achievements: ActualAchievement[] = currentChallenge.achievements.map(
    ({ id, description, icon }: Achievement) => ({
      id,
      description,
      image: icon,
      status: currentChallenge.achievementsStatus[id],
    })
  );

  return achievements;
};
