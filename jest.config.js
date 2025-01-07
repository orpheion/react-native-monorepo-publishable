/**
 * Jest configuration
 * https://jestjs.io/docs/configuration
 *
 * @type {import('jest').Config}
 */
const config = {
  preset: 'react-native',
  moduleNameMapper: {
    '@org/([^/]+)': '<rootDir>/packages/$1/src',
  },
};

module.exports = config;
