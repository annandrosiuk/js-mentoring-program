import { Achievement } from "../interfaces";

export const createNewAchievementsList = (
  allAchievements: Achievement[],
  requiredAchievement: Omit<Achievement, '_id'>[],
  achievementQty: number
): Achievement[] => {
  const randomAchievQty = achievementQty - requiredAchievement.length;
  const requiredAchievements: Achievement[] = allAchievements.filter(
    ({ description }: Achievement) =>
      requiredAchievement.find((element: Achievement) => description === element.description)
  );

  const randomAchievements: Achievement[] = allAchievements
    .filter(
      ({ description }: Achievement) =>
        !requiredAchievement.find((element: Achievement) => description === element.description)
    )
    .sort(() => Math.random() - 0.5)
    .splice(0, randomAchievQty);

  return [...requiredAchievements, ...randomAchievements];
};
