# ES6 Server

CLI built with connect to serve development files. Named modules in js and html files will be resolved against the `node_modules` directory and replaced with their relative path.

Example:

In source file:
```js
import { add } from 'math-lib/index.js';
```

Will be sent by this server as:

```js
import { add } from './node_modules/math-lib/index.js';
```

If the module cannot be resolved, it will be left as is and the browser will throw an error about the named module.

## Usage

```
es6-server # Serves the current directory on port 4000
es6-server ./subdir # Serves the provided directory on port 4000
es6-server --port 7000 # Serves the current directory on port 7000
es6-server --port 0 # Serves the current directory on a randomized port
```
