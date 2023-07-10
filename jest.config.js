module.exports = {
  // ...
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/styleMock.js',
  },
  testEnvironment: 'jsdom',
  // ...
};
