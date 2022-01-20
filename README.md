# eslint-config-micehub-react
마이스허브 React 프로젝트를 위한 ESLint 설정

## How to install
```
npm install --save-dev eslint prettier
```

```
npm install git+https://github.com/Micehub-dev/eslint-config-micehub-react.git
```

### package.json
```
{
  "eslintConfig": {
    "extends": "micehub-react",
  },
  /* ... */
  "script": {
    /* ... */
    "lint": "eslint ./ --ignore-path .gitignore", // --ignore-path can be removed
    "lint:fix": "npm run lint -- --fix",
    "format": "prettier --write \"{,!(node_modules)/**/}*.js\"",
  }
}
```