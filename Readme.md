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
  
## Server Recap

- Server: a computer that is always turned on and that is connected to the internet, listening to the requests. 
- Your browser makes a request to the server when you enter an URL or others. 
- When we import express server w/o node_module/, it knows that we are looking for an express application within the node_modules folder. 
- 

## External Middleware

- Morgan: request logger for node.js - 
- Install morgan
```js
npm i morgan
```
- https://www.npmjs.com/package/morgan
- Morgan functions return middleware. 
- Create a logger middleware. 
- When you use a morgan, it has a handy default logger information.
- morgan("combined"): shows different information.
- 

# Routers

*What is routers?*
- Routing refers to how an application’s endpoints (URIs) respond to client requests. 

- A router object is an isolated instance of middleware and routes. You can think of it as "mini-application," capable only of performing middleware and routing functions. Every Express application has a built-in app router.

- Create routes:

1. SQL 
- export, import to excel file. 
- basic CRUD
- I can first create CRUD in different pages. 
- /Create, /Read, /Update, /Delete.
- logo of the grocery store should be grabbed. 
- 

- Create a global router. 
- Create a login page -> For demonstration, you don't need this. 
- 

*How do you create a route using a router.*

```js
import express from "express";
import morgan from "morgan";
const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);


// You can create a second layer.
app.use("/", globalRouter);


const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
       
app.listen(PORT, handleListening);
```

- If you go to /videos, it will not display the page because videoRouter is not designed to display a page.
- 

# How do you clean the code?

- seperate routers with controllers because the logics may get bigger later with controllers. 
- 

20230227

## 1. Router Recap
- Routers is how we group urls together. 
- 

## 2. Architecture Recap
- Before you import, you have to export. 
- You can rename the module as you import by using 
```
import express from "express";
```
- *How do you seperate the controller in another file?*
globalRouter
```js
import express from "express";
import { handleHome, handleTest } from "./globalController";
const globalRouter = express.Router();



globalRouter.get("/", handleHome);
globalRouter.get("/test", handleTest);

export default globalRouter;
```

globalController
```js
export const handleHome = (req, res) => res.send("Home");
export const handleTest = (req, res) => res.send("Test");
```
- open the object with the brackets and select the function that you want to call. 

## 3. URL parameters

- enowiz.com/name
- This is a parameter. 
- You can make the nodeJS create the parameter for each ID by putting :id. 
- Parameters allows you to put varialbe that you have access. 
- : these are recognize as variable. 
- When you console.log (req.params), you will get the result when you put the IDs. (result in ID.)
- /:id: usually this page will display a detailed data. 
- The order that you put in the Router is important because the code work from top to bottom. Whatever that is on the top will be checked first and then later the bottom items will be checked. 
- However, if you put :id, they can put in the characters instead of the number. you can check that and screen the wrong use of URL. 

*How do you screen wrong data request from the user?*
- We can use regex to vet this. 
- There are default route path in the documentation.
express.com/en/guide/routing.html

- Regex will exist in every programming language and this is usually is to set the parameter. 
- /(nico\w+)/g
- All the words that contain nico and any characters afterwards. 
- All digits?
- /:id(\\d+): This is only going to be digits.
- 

## 4. Templates

- We can literally send the string of HTML and the browser will get the html
```
export const trending = (req, res) => res.send("<h1>Hello!</h1>);
```
- We are going to have a body so this would be inefficient
- It would also be too long.
- Also, giving the same code or HTML to return would be inefficient as well because there are some codes that overlap. 
- Install pug
https://www.npmjs.com/package/pug


```
```
- You have to state that you want to use a pug as a helper. 
- View Engine: pug
https://expressjs.com/ko/guide/using-template-engines.html



- Create a pug file. 
- View: array of directory that express will use. 
- 
Application Settings (Express어플리케이션 설정)
https://expressjs.com/ko/4x/api.html#app.use

- Create the views folder in the source. 
- Pug will turn the file into the html.

- Alternatives:
https://blog.logrocket.com/top-express-js-template-engines-for-dynamic-html-pages/

Note: how do you console.log cwd() current working directory?
```js
console.log(process.cwd());
```

How do you change the directory?
- Change the default value.

## 5. Partials
- Move the Views outside of source because that is the cwd().
- If you want to put the code all inside the src(), you can change default location. 

- You can create a seperate file called partial that literally stores the partial code. 
- Render: pug will execute all javascript and then provide the result to the user. 

## 6. Extending HTML

- We still have three files with the same structure other than the footers. 
- There are repeated codes. With the concept of inheritance, you don't have to write the same code over and over. 
- We can create a base.pug and extend that template over all other pages 
- 
base.pug
```pug
doctype html
html(lang="ko")
    head
        block head
    body
        block content
    include partials/footer.pug
```

home.pug
```pug
extends base.pug

block head
    title Home | Wetube

block content
    h1 Home!
```

- The concept of block is the space that we can put things inside. 
- First, create a block and add contents inside the block on the individual pages. 
- You can look at the pug documentaiton. ;

## Variables to Templates

- Variables
- We can put the javascript code and add it to the HTML template.
- If you include #{}.
- base.pug includes partial
- home.pug extends base.pug
- home.pug can edit the block content.
- .render can send the variable to the page or to the HTML template.
- For now globalController.js is sending the page title to the page. 
- 

## MVP Styles

- We are going to use the MVP styles to work on the CSS
- I can use the Bootstrap instead. 
- How do I import Bootstrap or incorporate Bootstrap into my code. 

https://getbootstrap.com/

- Use Bootstrap and use a translater to convert from HTML to pug

https://html-to-pug.com/

- Can you pass the var without using pug.
Yes, but the syntax is not pretty


https://stackoverflow.com/questions/37991995/passing-a-variable-from-node-js-to-html

## Conditionals

- conditional is needed when I want to only show data to certain users only. 

- To test this, create a fakeDB

controller.js
```js
const fakeUser = {
  username: "Nicolas",
  loggedIn: false,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser });
```

base.pug
```pug
        header
            if fakeUser.loggedIn
                small Hello #{fakeUser.username}
            nav

                ul
                    if fakeUser.loggedIn
                        li 
                            a(href="/logout") Log out
                    else
                        li 
                            a(href="/login") Login
            h1=pageTitle
```
- only shows the username if the user is logged in.

## Iteration

- show list of elements. 
- in case where the array is being sent. 
- 
Steps:

1. Create an fake db. 
2. Iterate each db and display element data.

Controller:
```js
export const trending = (req, res) => {
  const videos = [
    {
      title: "Hello",
    },
    {
      title: "Video #2",
    },
    {
      title: "Whatsup",
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
```

home.pug
```pug
extends base.pug
block content

    h2 Welcome here you will see the trending videos

    ul

        each video in videos

            li=video

        else

            li Sorry nothing found.
```

## 5.9 Mixins

 - mixin is like a partial but it is a partial that receives data. 
 - Samd shape but different data. We use partial. 
 - mixins are like smart partial.
 
src/views/home.pug
```js
extends base
include mixins/video

block content
    h2 Welcome here you will see the trending videos
    each potato in videos
        +video(potato)
    else
        li Sorry nothing found.
 ```

src/views/mixins/video.pug
```js

mixin video(info)
    div
        h4=info.title
        ul
            li #{info.rating}/5.
            li #{info.comments} comments.
            li Posted #{info.createdAt}.
            li #{info.views} views.
```

- This is a component that can be used everywhere. 
- 
## 5.0 Array DB

- Learn how to do post data to the backend.
- Post and save to the db. 
- listing - I want to see only one data. 
- 