// import { StatusState } from '@enums';
// import { getTaskForToday } from '@services';
// import { challenges } from './mock/data';

// describe('getTaskForToday', () => {
//   it('Should return a task for today with its status by the challenge id', () => {
//     const challengeId = '1';
//     const expectedResult = {
//       id: '11',
//       description: 'Send a short letter to future You in one year using futureme.org',
//       status: {
//         state: StatusState.PENDING,
//         updated: new Date('June 27, 2021 00:00:00'),
//       },
//     };
//     const result = getTaskForToday(challengeId, challenges);
//     expect(result).toEqual(expectedResult);
//   });

//   it('Should return null if there is no challenge with that id', () => {
//     const challangeId = '2';
//     const result = getTaskForToday(challangeId, challenges);
//     expect(result).toBeNull();
//   });
// });
