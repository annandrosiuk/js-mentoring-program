import { Status, Achievement } from '@interfaces';

export const calculateAchievementsStatus = (
  achievementsList: Achievement[],
  tasksStatus: Status
): Map<string, Status> => {
  const statuses: Map<string, Status> = new Map();

  achievementsList.forEach((achievement) => {
    statuses.set(achievement.id, tasksStatus);
  });
  return statuses;
};
