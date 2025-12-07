**aks-logger**
==============

A lightweight, customizable, color-coded logging utility built in **TypeScript**.\
Designed for Node.js projects that need clean, structured, professional-looking logs.

* * * * *

🚀 Features
-----------

- Fully **written in TypeScript**

- Supports multiple log levels:

  - `info`

  - `warn`

  - `error`

  - `success`

  - `debug`

- Color-coded output for readability

- Optional timestamps

- Easily extendable

- Zero dependencies (except `chalk`)

* * * * *

📦 Installation
---------------

`npm install aks-logger`

Or with pnpm:

`pnpm add aks-logger`

* * * * *

📁 Folder Structure
-------------------

`aks-logger/
│
├── src/
│   ├── index.ts
│   └── logger.ts
│
├── dist/
│   └── (compiled JS files)
│
├── tsconfig.json
├── package.json
└── README.md`

* * * * *

🔧 Usage
--------

`import { Logger } from "aks-logger";

const logger = new Logger({ showTimestamp: true });

logger.info("Server started");
logger.success("Database connected successfully");
logger.warn("Running in development mode");
logger.error("Failed to load config file");
logger.debug("Request body: { user: 'Abhishek' }");`

* * * * *

⚙️ Configuration Options
------------------------

The logger accepts a config object:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `showTimestamp` | boolean | true | Shows timestamps before each log |

Example:

`const logger = new Logger({
  showTimestamp: false,
});`

* * * * *

📜 Available Methods
--------------------

| Method | Description |
| --- | --- |
| `.info(msg)` | Logs plain info messages |
| `.warn(msg)` | Logs yellow warning messages |
| `.error(msg)` | Logs red error messages |
| `.success(msg)` | Logs green success messages |
| `.debug(msg)` | Logs dim debug messages |

* * * * *

🛠️ Build
---------

Compile TypeScript:

`npm run build`

* * * * *

🧪 Test Logger
--------------

`node dist/index.js`

* * * * *

📄 License
----------

MIT License.
