import {
  Achievement,
  ActualAchievement,
  ArchiveItem,
  Challenge,
  Status,
  TaskForToday,
  Task,
} from '@interfaces';

/**
 * Returns a current task with its status by the challenge id
 * @param  {string} challengeId challengeId - id of current challenge
 */
export type getTaskForToday = (challengeId: string) => TaskForToday;

/**
 * Returns a list of actual achievements by the challenge id
 * @param  {string} challengeId challengeId - id of current challenge
 */
export type getActualAchievements = (
  challengeId: string
) => ActualAchievement[];

/**
 * Returns all past tasks with their results by the challenge id
 * @param  {string} challengeId challengeId - id of current challenge
 */
export type getTaskArchive = (challengeId: string) => ArchiveItem[];

/**
 * Returns a new challenge using the following parameters:
 * @param  {Task[]} tasksList tasksList - a list of tasks
 * @param  {Challenge[]} challengesList challengesList - a list of challenges
 * @param  {number} challengeDuration challengeDuration - challenge duration that by default should be 30 days
 * @param  {number} achievementsNumber achievementsNumber - number of achievements – by default, challenge duration / 6
 */
export type startNewChallenge = (
  tasksList: Task[],
  challengesList: Challenge[],
  challengeDuration: number,
  achievementsNumber: number
) => Challenge;

/**
 * Returns achievements status for the challenge by its achievements list and tasks status
 * @param  {Achievement[]} achievementsList achievementsList - a list of achievements
 * @param  {Status} tasksStatus tasksStatus - tasks status
 */
export type calculateAchievementsStatus = (
  achievementsList: Achievement[],
  tasksStatus: Record<string, Status>
) => Record<string, Status>;
