import { Status } from '../interfaces';

export interface Task {
  _id?: string;
  description: string;
}

export interface TaskForToday extends Task {
  status: Status;
}

export interface ArchiveItem extends Task {
  status: Status;
}
