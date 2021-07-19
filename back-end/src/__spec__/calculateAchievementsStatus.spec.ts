import { StatusState } from '../enums';
import { calculateAchievementsStatus } from '../services';
import { achievements, tasksStatus } from './mock/data';

describe('calculateAchievementsStatus', () => {
  it('should return proper achievements status map for the challenge', () => {
    const result = calculateAchievementsStatus(
      achievements,
      tasksStatus
    );
    
    expect(result.size).toBe(achievements.length);
  });

  it('Should returns achievements status for the challenge by its achievements list and tasks status', () => {
    const result = calculateAchievementsStatus(
      achievements,
      tasksStatus
    );

    result.forEach((value) => {
      expect(value.state).toBe(StatusState.SUCCESS);
      expect(value.updated.getDay()).toBe(new Date().getDay());
    });
  });
});
