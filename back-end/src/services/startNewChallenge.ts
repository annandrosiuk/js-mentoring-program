import { ChallengeState, REQUIRED_ACHIEVEMENTS, StatusState } from '../enums';
import { Achievement, Challenge, Status, Task } from '../interfaces';
import { getRandomOrders } from '../utils';

export function startNewChallenge(
  tasks: Task[],
  achievementsList: Achievement[],
  challengeDuration = 30,
  numberOfAchievements = challengeDuration / 6
): Challenge {
  const isInvalidValue = !Array.isArray(tasks) || !tasks.length || !Array.isArray(achievementsList);
  if (isInvalidValue) return {} as Challenge;

  const randomTasksOrder = getRandomOrders(challengeDuration);
  const tasksOrder: Record<string, Task> = randomTasksOrder.reduce(
    (acc, current: number, index: number) => {
      acc[current] = tasks[index];
      return acc;
    },
    {}
  );
  const tasksStatus: Record<string, Status> = randomTasksOrder.reduce((acc, current: number) => {
    acc[current] = {
      state: StatusState.PENDING,
      updated: new Date(),
    };
    return acc;
  }, {});

  const achievements: Achievement[] = createNewAchievementsList(
    achievementsList,
    REQUIRED_ACHIEVEMENTS,
    numberOfAchievements
  );

  const achievementsStatus: Record<string, Status> = achievements.reduce(
    (acc, current: Achievement) => {
      acc[current.id] = {
        state: StatusState.PENDING,
        updated: new Date(),
      };
      return acc;
    },
    {}
  );

  const challenge: Challenge = {
    tasksOrder,
    tasksStatus,
    achievements,
    achievementsStatus,
    id: Date.now().toString(),
    state: ChallengeState.IN_PROGRESS,
    startDate: new Date(),
  };

  return challenge;
}

const createNewAchievementsList = (
  allAchievements: Achievement[],
  requiredAchievIds: string[],
  achievementQty: number
): Achievement[] => {
  const randomAchievQty = achievementQty - requiredAchievIds.length;
  const requiredAchievements: Achievement[] = allAchievements.filter(({ id }: Achievement) =>
    requiredAchievIds.includes(id)
  );

  const randomAchievements: Achievement[] = allAchievements
    .filter(({ id }: Achievement) => !requiredAchievIds.includes(id))
    .sort(() => Math.random() - 0.5)
    .splice(0, randomAchievQty);

  return [...requiredAchievements, ...randomAchievements];
};
