Input::
//// [/src/src/main.ts]
import { A } from "../shared/types/db";
const a: string = "hello";



Output::
/lib/tsc --b /src/tsconfig.json --incremental
exitCode:: ExitStatus.Success
Program root files: ["/src/shared/types/db.ts","/src/src/main.ts","/src/src/other.ts"]
Program options: {"outDir":"/src/dev-build","noEmitOnError":true,"incremental":true,"configFilePath":"/src/tsconfig.json"}
Program files::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/shared/types/db.ts
/src/src/main.ts
/src/src/other.ts


//// [/src/dev-build/shared/types/db.js]
"use strict";
exports.__esModule = true;


//// [/src/dev-build/src/main.js]
"use strict";
exports.__esModule = true;
var a = "hello";


//// [/src/dev-build/src/other.js]
"use strict";
exports.__esModule = true;
console.log("hi");


//// [/src/dev-build/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../shared/types/db.ts": {
        "version": "-9621097780-export interface A {\r\n    name: string;\r\n}",
        "signature": "-6245214333-export interface A {\r\n    name: string;\r\n}\r\n",
        "affectsGlobalScope": false
      },
      "../src/main.ts": {
        "version": "-8373351622-import { A } from \"../shared/types/db\";\nconst a: string = \"hello\";",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      },
      "../src/other.ts": {
        "version": "11373096570-console.log(\"hi\");\r\nexport { }",
        "signature": "-4882119183-export {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "outDir": "./",
      "noEmitOnError": true,
      "incremental": true,
      "configFilePath": "../tsconfig.json"
    },
    "referencedMap": {
      "../src/main.ts": [
        "../shared/types/db.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../shared/types/db.ts",
      "../src/main.ts",
      "../src/other.ts"
    ]
  },
  "version": "FakeTSVersion"
}

