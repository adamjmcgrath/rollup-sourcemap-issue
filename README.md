```shell script
$ rollup -c; node validate.js

index.js → out.js...
created out.js in 1.1s
/Users/mcgrata/Documents/dev/rollup-sourcemap-issue/node_modules/sourcemap-validator/index.js:153
          throw new Error(errMsg);
          ^

Error: Warning: mismatched names
Expected: _typeof || '_typeof' || '_typeof' || "_typeof" || "_typeof"
Got: typeof  || typeof ba || typeof ba || typeof ba || typeof ba
Original Line:   return typeof bar !== 'object';
```
