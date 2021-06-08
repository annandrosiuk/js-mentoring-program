import { ChallengeState, StatusState } from '@enums';
import { Achievement, ActualAchievement, Challenge, Status, Task } from '@interfaces';

export const tasks: Task[] = [
  { id: '1', description: 'Go to bed before 11:00 PM' },
  { id: '2', description: 'Take a picture of a sunset' },
  { id: '3', description: 'Make a small present for your friend without a reason' },
  { id: '4', description: 'Try a new cooking recipe' },
  { id: '5', description: 'Meditate for at least 10 minutes' },
  { id: '6', description: 'Call your family' },
  { id: '7', description: 'Eat your breakfast in bed' },
  { id: '8', description: 'Spend 20 minutes reading poetry out loud' },
  { id: '9', description: 'Write down at least five things you feel gratitude for' },
  { id: '10', description: 'Find a song you liked in adolescence and sing it like in karaoke' },
  { id: '11', description: 'Send a short letter to future You in one year using futureme.org' },
  { id: '12', description: 'Watch an old classic movie of your favorite genre' },
  { id: '13', description: 'Spend an hour playing a new trending computer/video/mobile game' },
  { id: '14', description: 'Go for a walk to the nearest park' },
  { id: '15', description: 'Send 10$ to any charity organization you trust' },
  { id: '16', description: 'Find out a new podcast and listen to a first episode' },
  { id: '17', description: 'Quit social media for at least one day' },
  { id: '18', description: 'Write down at least five things you are good at' },
  { id: '19', description: 'Take a cold shower' },
  { id: '20', description: 'Clean up your laptop and mobile screens' },
  { id: '21', description: 'Pick up at least ten stuff you don\'t use and donate/sell/recycle them' },
  { id: '22', description: 'Smile to a stranger' },
  { id: '23', description: 'Taste something you\'ve never tried before' },
  { id: '24', description: 'Write down your five best guesses about the future and send them to future You' },
  { id: '25', description: 'Order take away meal from your favorite restaurant' },
  { id: '26', description: 'Find out more about an artist you know the name but haven\'t seen their work' },
  { id: '27', description: 'Play drawasaurus.org with your friends online' },
  { id: '28', description: 'Take a picture of the most beautiful building on your street' },
  { id: '29', description: 'Do you morning exercise for at least 20 minutes' },
  { id: '30', description: 'Become a patron for a creator you like on patreon.com or a similar service' },
];

export const achievements: Achievement[] = [
  { 
    id: '1', description: 'Complete each task 7 days in a row', icon: '', 
    tasks: [
      {
        id: '1', 
        description: 'Complete each task 7 days in a row',
        status: {
          state: StatusState.PENDING,
          updated: new Date('June 18, 2021 00:00:00'),
        }
      }
    ] 
  },
  { id: '2', description: 'Complete five tasks before 8:00 AM', icon: '' , 
    tasks: [
      {
        id: '1', 
        description: 'Complete five tasks before 8:00 AM',
        status: {
          state: StatusState.PENDING,
          updated: new Date('June 18, 2021 00:00:00'),
        }
      }
    ] 
  },
  { id: '3', description: 'Complete 4 Monday\'s tasks', icon: '' , 
    tasks: [
      {
        id: '1', 
        description: 'Complete 4 Monday\'s tasks',
        status: {
          state: StatusState.PENDING,
          updated: new Date('June 18, 2021 00:00:00'),
        }
      }
    ] 
  },
  { id: '4', description: 'Complete half of the tasks', icon: '' , 
    tasks: [
      {
        id: '1', 
        description: 'Complete half of the tasks',
        status: {
          state: StatusState.PENDING,
          updated: new Date('June 18, 2021 00:00:00'),
        }
      }
    ] 
  },
  { id: '5', description: 'Complete all tasks', icon: '', 
    tasks: [
      {
        id: '1', 
        description: 'Complete all tasks',
        status: {
          state: StatusState.PENDING,
          updated: new Date('June 18, 2021 00:00:00'),
        }
      }
    ] 
  },
  { id: '6', description: 'Complete 5 tasks before 12:00 PM', icon: '', 
    tasks: [
      {
        id: '1', 
        description: 'Complete 5 tasks before 12:00 PM',
        status: {
          state: StatusState.PENDING,
          updated: new Date('June 18, 2021 00:00:00'),
        }
      }
    ] 
  },
  { id: '7', description: 'Complete each task 2 days in a row', icon: '' , 
    tasks: [
      {
        id: '1', 
        description: 'Complete each task 2 days in a row',
        status: {
          state: StatusState.PENDING,
          updated: new Date('June 18, 2021 00:00:00'),
        }
      }
    ] 
  },
];

export const actualAchievements: ActualAchievement[] = [
  {
    description: 'Complete each task 7 days in a row',
    id: '1',
    image: '',
    status: {
      state: StatusState.PENDING,
      updated: new Date('June 18, 2021 00:00:00'),
    },
  },
  {
    description: 'Complete five tasks before 8:00 AM',
    id: '2',
    image: '',
    status: {
      state: StatusState.PENDING,
      updated: new Date('June 18, 2021 00:00:00'),
    },
  },
  {
    description: 'Complete 4 Monday\'s tasks',
    id: '3',
    image: '',
    status: {
      state: StatusState.PENDING,
      updated: new Date('June 18, 2021 00:00:00'),
    },
  },
  {
    description: 'Complete half of the tasks',
    id: '4',
    image: '',
    status: {
      state: StatusState.PENDING,
      updated: new Date('June 18, 2021 00:00:00'),
    },
  },
  {
    description: 'Complete all tasks',
    id: '5',
    image: '',
    status: {
      state: StatusState.PENDING,
      updated: new Date('June 18, 2021 00:00:00'),
    },
  },
  {
    description: 'Complete 5 tasks before 12:00 PM',
    id: '6',
    image: '',
    status: {
      state: StatusState.PENDING,
      updated: new Date('June 18, 2021 00:00:00'),
    },
  },
  {
    description: 'Complete each task 2 days in a row',
    id: '7',
    image: '',
    status: {
      state: StatusState.PENDING,
      updated: new Date('June 18, 2021 00:00:00'),
    },
  },
];

export const tasksOrder = tasks.reduce((acc, current) => {
  acc[current.id] = current;
  return acc;
}, <Record<string, Task>>{});

export const tasksStatus: Record<string, Status> = tasks.reduce((acc, current, index) => {
  if (index === 0) {
    acc[current.id] = {
      state: StatusState.SUCCESS,
      updated: new Date('June 30, 2021 00:00:00'),
    };
  } else {
    acc[current.id] = {
      state: StatusState.PENDING,
      updated: new Date('June 27, 2021 00:00:00'),
    };
  }
  return acc;
}, <Record<string, Status>>{});

export const achievementsStatus = achievements.reduce((acc, current) => {
  acc[current.id] = {
    state: StatusState.PENDING,
    updated: new Date('June 18, 2021 00:00:00'),
  };
  return acc;
}, <Record<string, Status>>{});

export const challenges: Challenge[] = [{
  tasksOrder,
  achievements,
  tasksStatus,
  achievementsStatus,
  id: '1',
  state: ChallengeState.IN_PROGRESS,
  startDate: new Date('June 4, 2021 00:00:00'),
}];
