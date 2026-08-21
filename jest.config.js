const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // next.js app path
  // loads next.config.js and .env vars
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
}

module.exports = createJestConfig(customJestConfig)
