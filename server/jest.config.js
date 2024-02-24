/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: false
      },
    ],
  },
};
