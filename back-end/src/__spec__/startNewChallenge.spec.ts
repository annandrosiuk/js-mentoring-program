// import { startNewChallenge } from '@services';
// import { achievements, tasks, challenges } from './mock/data';

// describe('startNewChallenge', () => {
//   it('Should return new challenge with default challengeDuration and numberOfAchievements', () => {
//     const result = startNewChallenge(tasks, achievements);
//     expect(result).toHaveProperty('id');
//     expect(result).toHaveProperty('state');
//     expect(result).toHaveProperty('startDate');
//     expect(result).toHaveProperty('tasksOrder');
//     expect(result).toHaveProperty('tasksStatus');
//     expect(result).toHaveProperty('achievements');
//     expect(result).toHaveProperty('achievementsStatus');
//   });

//   it('Should return new challenge with randomly picket tasks', () => {
//     const result = startNewChallenge(tasks, achievements).tasksOrder[0];
//     const mockedTasksOrder = challenges[0].tasksOrder[0];
//     const expected = result === mockedTasksOrder;
//     expect(expected).toBeFalsy();
//   });

//   it('should return empty object, if achievements array is empty', () => {
//     const createdChallenge = startNewChallenge([], [], 0, 0);
//     expect(createdChallenge).toEqual({});
//   });
// });
