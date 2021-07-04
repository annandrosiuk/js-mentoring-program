import { Status, ArchiveItem } from '@interfaces';
import { TaskForToday } from './task.interface';

export interface Achievement {
  id: string;
  description: string;
  icon: string;
  tasks?: TaskForToday[];
  checkComplete?: (taskStatus: Record<string, Status>) => Status;
}

export interface ActualAchievement extends ArchiveItem {
  image: string;
}
