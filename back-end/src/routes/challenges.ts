import express, { Request, Response } from 'express';
import { Challenge } from 'src/interfaces';
import { tasksJobs } from '../jobs/tasksJobs';
import { achievementsJob } from '../jobs/achievementsJob';
import { startNewChallenge } from '../services';
import { CHALLENGE_SUCCESSFULLY_CREATED, SERVER_UNEXPECTED_ERROR } from '../enums';
import { achievements, tasks } from '../__spec__/mock/data';
import { errorHandler } from '../utils';

const router = express.Router();

router.get('/new-challenge', (request: Request, response: Response) => {
  console.log(`request ${JSON.stringify(request.headers.authorization)}`);
  const newChallenge: Challenge = startNewChallenge(tasks, achievements, 5);

  if (!newChallenge) {
    errorHandler(SERVER_UNEXPECTED_ERROR, response, null);
  } else {
    response.json({
      status: 200,
      message: CHALLENGE_SUCCESSFULLY_CREATED,
      challenge: newChallenge.id,
    });
    response.end();
  }

  tasksJobs(newChallenge.id); // schedule auto expiration for each task in new challenge
  achievementsJob(newChallenge.id); // schedule achievements status calculation at the end of challenge
});

export default router;
