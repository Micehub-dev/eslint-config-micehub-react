# eslint-config-micehub-react
마이스허브 React 프로젝트를 위한 ESLint 설정

## Prerequisite
Visual Studio Code 에서 ESLint 확장프로그램 설치하기

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


## How to install
```
npm install --save-dev eslint eslint-import-resolver-alias
```

```
npm install git+https://github.com/Micehub-dev/eslint-config-micehub-react.git
```

### ESLint config
`package.json`과 같은 폴더 안에 `.eslintrc.js` 생성하여 다음 내용 입력
```
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["micehub-react"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx"],
      },
    },
  },
};

```

### package.json
package.json의 script에 추가
```
{
  "script": {
    /* ... */
    "lint": "eslint ./ --ignore-path .gitignore", // --ignore-path can be removed
    "lint:fix": "npm run lint -- --fix",
    "format": "prettier --write \"{,!(node_modules)/**/}*.js\"",
  }
}
```

### VS Code Workspace Setting
`.vscode/settings.json` 파일에 다음 내용을 추가한다.
```
{
  // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
  "editor.formatOnSave": true,
  // Enable/disable default JavaScript formatter (For Prettier)
  "javascript.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.validate.enable": false,
  "eslint.alwaysShowStatus": true,
  // 아래 경로들은 Workspace와 각 React App의 Root 폴더가 일치하지 않을 때 입력한다.
  "eslint.workingDirectories": ["./app_hostcenter", "./app_platform", "./app_site"]
}
```

## 사용법
`.js`, `.jsx` 파일을 열어서 빨간 줄들이 뜨는지 확인

소스 파일을 저장했을 때 Javascript 및 React 관련 규칙 등이 고쳐지는지 확인

### 소스코드 하나 점검
```
npx eslint ./src/App.js
```
### 소스코드 하나 자동 교정
```
npx eslint ./src/App.js --fix
```
### 경로상의 모든 소스코드 점검
```
npx eslint ./
or
npm run lint
```
### 경로상의 모든 소스코드 자동 교정
```
npx eslint ./ --fix
or
npm run lint:fix
```
### 설정이 업데이트 됐을 때 해당 설정을 사용하는 모든 프로젝트에서
다음 코드를 실행하여 eslint-config-micehub-react 업데이트
```
npm install --save-dev github:Micehub-dev/eslint-config-micehub-react
```