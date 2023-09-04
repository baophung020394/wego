import type { Config } from '@jest/types'
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@stores/(.*)$': '<rootDir>/src/stores/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jest-environment-jsdom'
  // transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$']
}
export default config
