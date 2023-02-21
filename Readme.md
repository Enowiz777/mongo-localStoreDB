# Grocery Data

20230208

1. Create a file called "package.json"
- You can create package.json automatically
2. Create a git repo and store code files there. 
3. Use npm

*How do start npm?*
```
npm init
```
- fill out an application with information about the app.
- data that you filled will be stored in a package.json file.

4. How do you run the index.js file.

- Though running "node index.js" woudl run the index.js file through node.js, you can create a script to make this process seamless.

*How do you create a script?*
  Steps:
  1. Add script to package.json
  2. You can use script to perform certain commands. 
  3. There are unlimited scripts that you can add.
    Typical script examples: build, compress, etc.

5. Create a server using ExpressJS
- You can use "npm install" or "npm i" to use npm to install packages.
- npm i express: installs expressJS.
- notice node_modules get created. This folder contains all the packages needed to run an app.
- there are dependencies that is being used in package.json.
- created lock file. package-lock.json. This file is to prevent changes in the dependencies. (The exact dependencies versions need to run to make the app work well.)

**
Note:
npm i will install everything from the package.json because package.json indicates what dependencies are needed to run the project.
**
- This is useful when you transfer files because all you need to do is to share package.json and other pc will just run the npm i to get necessary dependencies you need to run the project.

*What is package-lock.json?*
- package-lock.json checks whether the package has been edited or not to make it secure. If the package works, you don't want people to modify the package. If friends run the package.json, it makes sure that npm is getting the exact version so that it would run the app precisely.

- *make sure to save package.json*

6. Babel

- Link: https://babeljs.io/

- We use JavaScript only NodeJS understands or use Babel to compile the sexy javascript.
- In a nutshell, Babel will translate from the newest Javascript language into a browser compatible javascript.
- Look at the page that shows you how to install Babel. 

  Steps:
  1. Run below
  ```
  npm install --save-dev @babel/core
  ```
  - The babel gets saved under a developer dependency.
  - You will see babel in the package.json.

  2. Create a config file.
  ```
  npm install @babel/preset-env --save-dev
  ```
  - Create a file called 'babel.config.json' in the root. 
  - Add below to the babel.config.json file.

  ```js
  {
    "presets": ["@babel/preset-env"]
  }
  ```
  - preset is the big set of plugins. preset/env is a smart preset that allows us to use the latest javascript. We have one for react and typescripts.


7. Nodemon

- Usage - use babel from javascript? We are going to use the script to do that for us. 
- Select Nodemon instruction on the website
https://babeljs.io/setup#installation

- Follow the instruction to install Nodemon:

  Steps:

  1. Install @babel/node
  ```
  npm install @babel/node --save-dev
  ```
  - Nodemon can watch the changes and run the app or incorporate changes. 

  2. Install Nodemon
  ```
  npm i nodemon --save-dev
  ```

  3. After you install, add it to the script

  Result: everytime you change the index.js, nodemon detects the change and apply update on the page.

8. First Server

- File organizaiton: 
Steps:
1. Create the main folder called src.
2. If you get an error, you need to change the filepath on the package.json.
3. Change index.js to server.js
4. Write server.js
```js
// looking for express in the node modules folder.
import express from "express";


```
*What is server?*
- A machine waiting to respond to requests.
- 24/7 operational.
- What port that the server is going to listen to. We need to state the port because the computer has many ports that are like doors.
- ctrl+c will kill the server.
- when you go to the port 4000 -> Localhost:4000 you get an error. 

```js

// use express server

//const express = require("express");
// new version
import express from "express";


const app = express();

const handleListening = () => console.log("Server listening on port 4000"
);

// high number ports are available. The, run the callback called handleListening
app.listen(4000, handleListening);



```

9. GET requests

- Google.com is same as google.com/
- / means the root or the first page of the website.
- 
*What is HTTP?*
- You are seeing https, remove s you get http. 
- http is how we talk to a server. It is the most solid one to communicate.
- When users are going into the server, the browser is making HTTP request for you. 
- HTTP has many methods. GET - get a page. 
- You make the website come to you via an internet browser. 
- Browser is requesting for a website and it is getting the page for you. 
- 

*Teach server how to respond to a request?*
- Create express server, you can write code. 
- When you get a GET request, you need to provide a response. 

- create 

20230220- 

Middleware is a software in the middle.
- Middleware needs to have the next() third argument so that next funciton can be triggered. 
- If you return a value, it stops.
- app.get(); app.use() - create global middleware.

- Review:
  - Script allows you to run the bash script with a shorter code. Script is in a package.json file. 
  - Dependencies: packages that your project needs to run. 
  - npm install will look at the versions listed in package.json.lock and install on the PC so that the app can run using those dependencies.
  