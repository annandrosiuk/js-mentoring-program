import { Status, ArchiveItem } from '../interfaces';
import { TaskForToday } from './task.interface';

export interface Achievement {
  _id?: string;
  description: string;
  image: string;
  tasks?: TaskForToday[];
  checkComplete?: (taskStatus: Map<string, Status>) => Status;
}

export interface ActualAchievement extends ArchiveItem {
  image: string;
}
