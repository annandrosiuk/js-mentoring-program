import { Challenge, TaskForToday, Status, Task } from '@interfaces';
import { getCurrentChallange, getDayOfChallenge } from '@utils';

export const getTaskForToday = (challengeId: string, challengesList: Challenge[]): TaskForToday => {
  const currentChallenge: Challenge = getCurrentChallange(challengesList, challengeId);

  if (!currentChallenge) {
    return null;
  }

  const dayOfChallenge: number = getDayOfChallenge(currentChallenge.startDate);
  const currentTask: Task = currentChallenge.tasksOrder[dayOfChallenge.toString()];
  const status: Status = currentChallenge.tasksStatus[currentTask.id];

  return {
    ...currentTask,
    status,
  };
};
