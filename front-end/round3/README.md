`main.ts` 파일을 빌드하고 결과인 `main.js` 파일을 실행하려면 TypeScript를 JavaScript로 컴파일하는 과정과 실행 과정이 필요합니다. 아래의 명령들은 이 과정을 단계별로 수행하는 방법을 설명합니다.

1. **TypeScript 설치**: TypeScript 컴파일러인 `tsc`를 사용하기 위해서는 먼저 TypeScript를 설치해야 합니다. npm을 사용해 설치할 수 있습니다:
   ```bash
   npm install -g typescript
   ```

2. **tsconfig.json 파일 생성**: TypeScript 프로젝트를 구성하기 위해 `tsconfig.json` 파일을 생성합니다. 이 파일은 TypeScript 컴파일 옵션을 정의합니다. 간단한 예제는 다음과 같습니다:
   ```json
   {
     "compilerOptions": {
       "outDir": "./dist",
       "noImplicitAny": true,
       "module": "commonjs",
       "target": "es6",
       "sourceMap": true
     },
     "include": ["**/*"]
   }
   ```
   이 설정은 `모든` 디렉토리에 있는 모든 TypeScript 파일을 ES6 JavaScript로 컴파일하고, 결과 파일을 `dist` 디렉토리에 저장합니다.

3. **TypeScript 파일 빌드**: 프로젝트의 루트 디렉토리에서 아래 명령을 실행하여 `main.ts` 파일을 컴파일합니다:
   ```bash
   tsc
   ```

4. **Node.js로 JavaScript 실행**: 컴파일된 JavaScript 파일을 Node.js로 실행합니다. 파일이 `dist` 폴더 내에 생성된다고 가정하면, 실행 명령은 다음과 같습니다:
   ```bash
   node dist/main.js
   ```

이 모든 과정을 하나의 명령으로 만들려면, npm 스크립트를 `package.json` 파일에 추가할 수 있습니다. 예를 들어:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/main.js",
    "build-and-run": "npm run build && npm run start"
  }
}
```

이제 터미널에서 아래 명령을 실행하여 `main.ts`를 빌드하고 실행할 수 있습니다:
```bash
npm run build-and-run
```

이 설정을 사용하면 TypeScript 설정을 쉽게 관리하고, 빌드 및 실행 과정을 간소화할 수 있습니다.
