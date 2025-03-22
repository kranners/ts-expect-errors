#!/usr/bin/env node

import { getSourceFiles } from "./lib/load-files";

const [sourceDirectoryPath] = process.argv.slice(2) as (string | undefined)[];

if (sourceDirectoryPath === undefined) {
  console.error("Please provide a filepath");
  process.exit(1);
}

const sourceFiles = getSourceFiles(sourceDirectoryPath);
console.log({ sourceFiles });
