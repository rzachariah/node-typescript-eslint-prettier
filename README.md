# node-template

Template nodejs project with typescript, eslint, and prettier

## To reproduce

### Setup node project
```
npm init -y
mkdir src
touch src/index.ts
```
Write some code.

### Setup typescript
Install the package.
```
npm install typescript --save-dev
```
Install node ambient types.
```
npm install @types/node --save-dev
```
Create a tsconfig
```
npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
```
Add npm scripts
```
    "build": "tsc",
    "start": "npm run build && node build",
```

### Setup eslint
Install packages.
```
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
Create an .eslintrc file.
```
touch .eslintrc
```
Use starter config.
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
```
Ignore some folders.
```
touch .eslintignore
```
ie these
```
node_modules
dist
```
Add a lint script
```
{
  "scripts": {
    ...
    "lint": "eslint . --ext .ts",
  }
}
```

### Setup prettier
Install package.
```
npm install --save-dev prettier
```
Create config file
```
touch .prettierrc
```
Example config.
```
{
  "trailingComma": "all",
  "bracketSpacing": true
}
```
Add format npm script
```
  "format": "prettier --config .prettierrc 'src/**/*.ts' --write"
```
Add VSCode settings
```
touch .vscode/settings.json
```
Set format options
```
{
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true
}
```
Configure prettier to work with eslint. Install two more packages.
```
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```
Adjust .eslintrc
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"  ],
  "rules": {
    "no-console": 1,       // Means warning
    "prettier/prettier": 2 // Means error  }
}
```

That's it! Now go reward yourself with a legal addictive stimulant of your choice.