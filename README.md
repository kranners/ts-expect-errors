# ts-expect-errors



Tool to quickly migrate an existing JavaScript / TypeScript project.

Will search for `.js`, `.ts`, `.jsx`, and `.tsx` files and add a
`@ts-expect-error` comment above each compiler error.

Will also automatically remove any redundant `@ts-expect-error` comments.

## Installation

Like you would install any other Node package:
```shell
# To install as a local dependency
npm install -D @cute-engineer/ts-expect-error

# To install globally
npm install -g @cute-engineer/ts-expect-error
```

## Usage

```shell
# Run the thing
ts-expect-error /path/to/project/root
```

