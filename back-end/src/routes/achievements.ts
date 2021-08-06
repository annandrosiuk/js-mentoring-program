import passport from 'passport';
import express, { Request, Response } from 'express';
import { ActualAchievement } from '../interfaces';
import { getActualAchievements } from '../services';
import { errorHandler } from '../utils';
import { SERVER_UNEXPECTED_ERROR } from '../enums';

const router = express.Router();

router.get(
  '/achievements',
  passport.authenticate('jwt', { session: false }),
  async (request: Request, response: Response) => {
    const { challenge_id } = request.body;
    const achievements: ActualAchievement[] = await getActualAchievements(challenge_id);

    if (!achievements) {
      errorHandler(SERVER_UNEXPECTED_ERROR, response, null);
    } else {
      response.json({
        status: 200,
        achievements: achievements,
      });
      response.end();
    }
  }
);

export default router;
