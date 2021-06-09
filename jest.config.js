const {defaults} = require('jest-config');
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '/\.next/'],
    globals: {
        // we must specify a custom tsconfig for 123 because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        "ts-jest": {
            tsConfig: "tsconfig.jest.json",
        },
    },
};
