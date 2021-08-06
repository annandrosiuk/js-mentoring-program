import { ChallengeState, REQUIRED_ACHIEVEMENTS, StatusState } from '../enums';
import { Achievement, Challenge, Status, Task } from '../interfaces';
import { getRandomOrders } from '../utils';
import { createNewAchievementsList } from './createNewAchievementsList';

export function startNewChallenge(
  tasks: Task[],
  achievementsList: Achievement[],
  challengeDuration = 30,
  achievementsPerChallenge = challengeDuration / 6
): Omit<Challenge, '_id'> {
  const isInvalidValue = !Array.isArray(tasks) || !tasks.length || !Array.isArray(achievementsList);
  if (isInvalidValue) return {} as Challenge;

  const randomTasksOrder = getRandomOrders(challengeDuration);
  const tasksOrder: Map<string, Task> = randomTasksOrder.reduce(
    (accumulator, current: number, index: number) => {
      accumulator.set(`${index + 1}`, tasks[current]);
      return accumulator;
    },
    new Map()
  );

  const tasksStatus: Map<string, Status> = randomTasksOrder.reduce(
    (accumulator, current: number) => {
      accumulator.set(`${current + 1}`, {
        state: StatusState.PENDING,
        updated: new Date(),
      });
      return accumulator;
    },
    new Map()
  );

  const achievements: Achievement[] = createNewAchievementsList(
    achievementsList,
    REQUIRED_ACHIEVEMENTS,
    achievementsPerChallenge
  );

  const achievementsStatus: Map<string, Status> = achievements.reduce(
    (accumulator, current: Achievement) => {
      const key = current._id.toString();
      accumulator.set(key, {
        state: StatusState.PENDING,
        updated: new Date(),
      });
      return accumulator;
    },
    new Map()
  );

  const challenge: Omit<Challenge, '_id'> = {
    state: ChallengeState.IN_PROGRESS,
    startDate: new Date(),
    tasksOrder,
    tasksStatus,
    achievements,
    achievementsStatus,
  };

  return challenge;
}
