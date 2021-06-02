import { ChallengeState } from '@enums';
import { Task } from '@interfaces';
import { Status } from './status.interface';

export interface Challenge {
  id: string;
  state: ChallengeState;
  startDate: Date;
  tasksOrder: Record<string, Task>;
  tasksStatus: Record<string, Status>;
  achievementsStatus: Record<string, Status>;
}
