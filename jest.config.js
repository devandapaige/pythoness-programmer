const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  collectCoverage: false, // Disabled due to test-exclude incompatibility with glob 10.4.6+
  // Coverage can be re-enabled after migrating to Django or when test-exclude is updated
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx,ts,tsx}',
  //   '!src/**/*.d.ts',
  //   '!src/**/_*.{js,jsx,ts,tsx}',
  //   '!src/**/*.stories.{js,jsx,ts,tsx}',
  //   '!**/node_modules/**',
  //   '!**/.next/**',
  // ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig); 