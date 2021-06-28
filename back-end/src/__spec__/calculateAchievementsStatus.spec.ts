import { StatusState } from '@enums';
import { Status } from '@interfaces';
import { calculateAchievementsStatus } from '@services';
import { achievements } from './mock/data';

describe('calculateAchievementsStatus', () => {
  it('should return proper achievements status map for the challenge', () => {
    const tasksStatus: Status = {
      state: StatusState.SUCCESS,
      updated: new Date(),
    };
    const result = calculateAchievementsStatus(
      achievements,
      tasksStatus
    );
    
    expect(result.size).toBe(achievements.length);
  });

  it('Should returns achievements status for the challenge by its achievements list and tasks status', () => {
    const tasksStatus: Status = {
      state: StatusState.SUCCESS,
      updated: new Date(),
    };
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
