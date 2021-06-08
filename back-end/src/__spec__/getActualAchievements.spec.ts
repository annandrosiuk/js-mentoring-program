import { getActualAchievements } from '@services';
import { actualAchievements, challenges } from './mock/data';

describe('getActualAchievements', () => {
  it('Should return a list of actual achievements by the challenge id', () => {
    const challengeId = '1';
    const result = getActualAchievements(challengeId, [...challenges]);
    expect(result).toEqual(actualAchievements);
  });

  it('Should return null if there is no challenge with that id', () => {
    const challangeId = '2';
    const result = getActualAchievements(challangeId, [...challenges]);
    expect(result).toBeNull();
  });
});
