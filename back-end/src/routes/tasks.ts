import { SERVER_UNEXPECTED_ERROR } from '../enums';
import { getTaskArchive, getTaskForToday } from '../services';
import { Task, ArchiveItem, Challenge } from '../interfaces';
import { errorHandler } from '../utils';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/task', (request: Request, response: Response) => {
  const { challenge_id } = request.body;
  const currentTask: Task = getTaskForToday(challenge_id, [] as Challenge[]);

  if (!currentTask) {
    errorHandler(SERVER_UNEXPECTED_ERROR, response, null);
  } else {
    response.json({
      status: 200,
      currentTask: currentTask,
    });
    response.end();
  }
});

router.get('/task-archive', (request: Request, response: Response) => {
  const challenge_id = request.body.challenge_id;
  const archivedTasks: ArchiveItem[] = getTaskArchive(challenge_id, [] as Challenge[]);

  if (!archivedTasks) {
    errorHandler(SERVER_UNEXPECTED_ERROR, response, null);
  } else {
    response.json({
      status: 200,
      challenge: archivedTasks,
    });
    response.end();
  }
});

export default router;
