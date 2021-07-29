import mongoose from 'mongoose';
import UserModel from '../models/user.model';
import AchievementModel from '../models/achievement.model';
import TaskModel from '../models/task.model';
import { achievements } from '../data/achievements.json';
import { tasks } from '../data/tasks.json';
import { databaseConnect } from '../db/connect';

const setInitialAchievements = (): Promise<void> => {
  return AchievementModel.collection
    .insertMany([...achievements])
    .then(() => console.info('Initial achievements were successfully stored.'))
    .catch((error) => console.error(error));
};

const setInitialTasks = (): Promise<void> => {
  return TaskModel.collection
    .insertMany([...tasks])
    .then(() => console.info('Initial tasks were successfully stored.'))
    .catch((error) => console.error(error));
};

const setInitialUser = (): Promise<void> => {
  const defaultUser = {
    firstName: 'Coralina',
    lastName: 'Jones',
    email: 'Coralina.Jones@gmail.com',
    password: 'password1',
  };

  const databaseUser = new UserModel(defaultUser);
  return databaseUser
    .save()
    .then(() => console.log('Default user was successfully stored.', defaultUser))
    .catch((error) => console.error(error));
};

export const startScript = (): void => {
  Promise.all([setInitialAchievements(), setInitialTasks(), setInitialUser()]).then(() => {
    mongoose.connection.close();
  });
};

databaseConnect();

startScript();
