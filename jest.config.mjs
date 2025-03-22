/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest", {}],
  },
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "/.direnv/",
    "/node_modules/",
    "/dist/",
    "/.{git,cache,output,temp}/",
    "/.config/",
  ],
};
