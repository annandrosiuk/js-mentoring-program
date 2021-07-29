import { calculateAchievementsStatus } from '../services';
import * as schedule from 'node-schedule';
import socketIo from 'socket.io';

export const achievementsJob = (
  challengeId: string,
  io: socketIo.Server,
  challengeDuration = 30
): schedule.Job => {
  const rule = `0 0 ${challengeDuration} * *`;

  const updateStatus = () => {
    return calculateAchievementsStatus(challengeId, io);
  };

  return schedule.scheduleJob(rule, updateStatus);
};
