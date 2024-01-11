const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupFilesAfterEnv.js'],
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf|svg|avif)$': '<rootDir>/jest/moduleMapper/fileMock.js',

    "^@api(.*)$": "<rootDir>/src/api$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@types(.*)$": "<rootDir>/src/types$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1"
  }
}

module.exports = createJestConfig(customJestConfig)