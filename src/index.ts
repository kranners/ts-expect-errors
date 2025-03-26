#!/usr/bin/env node

import ts from "typescript";
import { getSourceFiles } from "./lib/load-files";

const [sourceDirectoryPath] = process.argv.slice(2) as (string | undefined)[];

if (sourceDirectoryPath === undefined) {
  console.error("Please provide a filepath");
  process.exit(1);
}

const sourceFiles = getSourceFiles(sourceDirectoryPath);
console.log({ sourceFiles });

const program = ts.createProgram(sourceFiles, {});
const emitResult = program.emit();

const diagnostics = ts
  .getPreEmitDiagnostics(program)
  .concat(emitResult.diagnostics);

for (const diagnostic of diagnostics) {
  if (diagnostic.file === undefined || diagnostic.start === undefined) {
    continue;
  }

  const token = diagnostic.file.getChildAt(diagnostic.start);
  ts.addSyntheticLeadingComment(
    token,
    ts.SyntaxKind.SingleLineCommentTrivia,
    `@ts-expect-error - ${diagnostic.messageText}`,
  );
}

console.log({ diagnostics });
