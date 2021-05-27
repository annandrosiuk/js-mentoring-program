import { Status, ArchiveItem } from '@interfaces';

export interface Achievement {
  id: string;
  description: string;
  icon: string;
  checkComplete(taskStatus: Record<string, Status>): Status;
}

export interface ActualAchievement extends ArchiveItem {
  image: string;
}
