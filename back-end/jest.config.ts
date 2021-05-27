import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: false,
  collectCoverage: true,
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  notify: true,
  notifyMode: 'success-change',
};

export default config;
