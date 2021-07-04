import { Challenge, ArchiveItem, TaskForToday, Achievement } from '@interfaces';
import { getCurrentChallange } from '@utils';

export const getTaskArchive = (challengeId: string, challengesList: Challenge[]): ArchiveItem[] => {
  const currentChallenge: Challenge = getCurrentChallange(challengesList, challengeId);
  if (!currentChallenge) {
    return null;
  }

  const actualAchievements: Achievement[] = currentChallenge.achievements;
  return actualAchievements.flatMap((actualAchievement) =>
    getArchiveTasks(actualAchievement.tasks)
  );
};

const getArchiveTasks = (taskForToday: TaskForToday[]): ArchiveItem[] => {
  return taskForToday.map(({ id, description, status }: ArchiveItem) => ({
    id,
    description,
    status,
  }));
};
