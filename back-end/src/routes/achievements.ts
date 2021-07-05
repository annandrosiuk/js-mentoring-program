import { SERVER_UNEXPECTED_ERROR } from '../enums';
import { getActualAchievements } from '../services';
import express, { Request, Response } from 'express';
import { Challenge } from '../interfaces';
import { errorHandler } from '../utils';

const router = express.Router();

router.get('/achievements', (request: Request, response: Response) => {
  const { challenge_id } = request.body;
  const achievements = getActualAchievements(challenge_id, [] as Challenge[]);

  if (!achievements) {
    errorHandler(SERVER_UNEXPECTED_ERROR, response, null);
    return;
  }

  response.json({ status: 200, challenge: achievements });
  response.end();
});

export default router;
