import passport from 'passport';
import { Types } from 'mongoose';
import socketIo from 'socket.io';
import express, { Request, Response } from 'express';

import { startNewChallenge } from '../services';
import { Challenge, UserInfo } from '../interfaces';
import { errorHandler } from '../utils/errorHandler';
import { SERVER_UNEXPECTED_ERROR, CHALLENGE_SUCCESSFULLY_CREATED } from '../enums';
import { tasksJobs } from '../jobs/tasksJobs';
import { achievementsJob } from '../jobs/achievementsJob';
import TaskModel from '../models/task.model';
import UserModel from '../models/user.model';
import AchvModel from '../models/achievement.model';
import ChallengeModel from '../models/challenge.model';

export const router1 = (io: socketIo.Server): express.Router => {
  const router: express.Router = express.Router();

  router.get(
    '/new-challenge',
    passport.authenticate('jwt', { session: false }),
    async (request: Request, response: Response): Promise<void> => {
      try {
        const user = request.user as UserInfo;
        const tasks = await TaskModel.find({});
        const achievements = await AchvModel.find({});
        const newChallenge: Omit<Challenge, '_id'> = startNewChallenge(tasks, achievements, 30, 5);

        const databaseChallenge = new ChallengeModel(newChallenge);
        const savedChallenge = await databaseChallenge.save();

        await UserModel.updateOne(
          { _id: new Types.ObjectId(user._id) },
          { challengeId: databaseChallenge._id }
        );

        response.json({
          status: 200,
          message: CHALLENGE_SUCCESSFULLY_CREATED,
          challenge: savedChallenge,
        });

        response.end();

        tasksJobs(databaseChallenge._id, io); // schedule auto expiration for each task in new challenge
        achievementsJob(databaseChallenge._id, io); // schedule achievements status calculation at the end of challenge
      } catch (error) {
        errorHandler(SERVER_UNEXPECTED_ERROR, response, error);
        throw error;
      }
    }
  );

  return router;
};
