import { StatusState } from '../enums';
import { Status, Achievement } from '@interfaces';

export const calculateAchievementsStatus = (
  achievementsList: Achievement[],
  tasksStatus: Record<string, Status>
): Map<string, Status> => {
  const mockAchievementsList = achievementsList.reduce((accumulator, current: Achievement) => {
    accumulator.set(current.id, {
      [current.id]: {
        state: Math.random() <= 0.5 ? StatusState.SUCCESS : StatusState.FAILURE,
        updated: new Date(),
      },
    });

    return accumulator;
  }, new Map());

  // TODO: Use actual achievementsList instead of mock
  const actual = achievementsList.reduce((accumulator, current: Achievement) => {
    accumulator[current.id] = current.checkComplete(tasksStatus);
    return accumulator;
  }, {});

  console.log(actual);

  return mockAchievementsList;
};
