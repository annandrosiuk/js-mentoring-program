import { ChallengeState } from '../enums';
import { Task } from '../interfaces';
import { Achievement } from './achievement.interface';
import { Status } from './status.interface';

export interface Challenge {
  _id: string;
  state: ChallengeState;
  startDate: Date;
  tasksOrder: Map<string, Task>;
  tasksStatus: Map<string, Status>;
  achievements: Achievement[];
  achievementsStatus: Map<string, Status>;
}
