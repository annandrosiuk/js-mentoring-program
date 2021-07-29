import { TaskForToday, Status, Task } from '../interfaces';
import { getDayOfChallenge } from '../utils';
import ChallengeModel, { ChallengeDocument } from '../models/challenge.model';

export const getTaskForToday = async (challengeId: string): Promise<TaskForToday | null> => {
  const challenge: ChallengeDocument = await ChallengeModel.findById(challengeId);

  if (!challenge) {
    return null;
  }

  const dayOfChallenge: number = getDayOfChallenge(challenge.startDate);
  const index = `${dayOfChallenge + 1}`;

  const currentTask: Task = challenge.tasksOrder.get(index);
  const status: Status = challenge.tasksStatus.get(index);

  return {
    ...currentTask,
    status,
  };
};
