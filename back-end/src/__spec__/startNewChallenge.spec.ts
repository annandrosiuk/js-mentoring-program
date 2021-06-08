import { startNewChallenge } from '@services';
import { achievements, tasks } from './mock/data';

describe('startNewChallenge', () => {
  it('Should return new challenge with default challengeDuration and numberOfAchievements', () => {
    const result = startNewChallenge(tasks, achievements);
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('state');
    expect(result).toHaveProperty('startDate');
    expect(result).toHaveProperty('tasksOrder');
    expect(result).toHaveProperty('tasksStatus');
    expect(result).toHaveProperty('achievements');
    expect(result).toHaveProperty('achievementsStatus');
  });

  it('Should return new challenge with randomly picket tasks', () => {
    const result1 = startNewChallenge(tasks, achievements).tasksOrder;
    const result2 = startNewChallenge(tasks, achievements).tasksOrder;
    const expected1 = result1[0].description === result2[0].description;
    const expected2 = result1[10].description === result2[15].description;
    expect(expected1).toBeFalsy();
    expect(expected2).toBeFalsy();
  });
});
