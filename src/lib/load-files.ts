import { readdirSync } from "fs";

// TODO: Make this also configurable
const JS_SOURCE_FILE_EXTENSIONS = [".js", ".ts", ".jsx", ".tsx"] as const;

// TODO: Make this configurable
const EXCLUDE_FILEPATHS = ["node_modules", "dist", ".git", ".direnv"] as const;

const withoutExcludedFilepath = (filepath: string): boolean => {
  return !EXCLUDE_FILEPATHS.some((excludedFilepath) =>
    filepath.includes(excludedFilepath),
  );
};

const endsWithSourceFileExtension = (filepath: string): boolean => {
  return JS_SOURCE_FILE_EXTENSIONS.some((fileExtension) =>
    filepath.endsWith(fileExtension),
  );
};

export const getSourceFiles = (sourceDirectoryPath: string): string[] => {
  // TODO: Potentially recurse upwards for a .git directory first?
  const files = readdirSync(sourceDirectoryPath, { recursive: true });
  return files
    .map((file) => file.toString())
    .filter(withoutExcludedFilepath)
    .filter(endsWithSourceFileExtension);
};
