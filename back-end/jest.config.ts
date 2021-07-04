import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: false,
  collectCoverage: true,
  testPathIgnorePatterns: ['/lib/', '/node_modules/', '<rootDir>/src/__spec__/mock'],
  modulePaths: ['<rootDir>'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__spec__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@enums': '<rootDir>/src/enums',
    '@interfaces': '<rootDir>/src/interfaces',
    '@services': '<rootDir>/src/services',
    '@types': '<rootDir>/src/types',
    '@utils': '<rootDir>/src/utils',
  },
};

export default config;
