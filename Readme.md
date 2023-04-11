# LocalStoreDB

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

*How do you send data to the backend?*

## 6.7 Intro to mongo DB

- Use MongoDB - general purpose, document-based, distributed databased. 
- MongoDB is good because it is document-based. 
- Most SQL are row-based like excel sheet and they have many rules. 
- This database think like object. 
- DB thinks like an object too. 
- It is similar to .json. 
- You can put the DB in the cloud and make it fast etc. 
- MongoDB.com - server - installation - Community Edition, Enterprise and others. 

*How do you install MongoDB?*

- They make MongoDB for free and offer a better service. 
- Install MongoDB using .msi

## 6.8 Connecting to Mongo

- Mongoose: the bridge between node.js to MongoDB. 
- Easy to use. 
- This is an important package for us. 
- We can talk to Mongo using the Javascript. 
https://mongoosejs.com/

- To test your MongoDB installation. 
- You type the word "mongod", you should be getting bunch of messages. 

*follow instruction to install*
- Go type 'mongo' which will connect into the mongo shell.
- You can talk to mongoDB. you can write commands to modify the mongo db. 
- help: all the help commands will show. 
- show dbs 
- You can interact with mongodb directly. 
- The point is, you should be able to access mongod and mongo 
- Make sure that you can run the commands. 
- First, look at the github. 
- npm i mongoose

- Create a new file called database.
db.js

- type mongo in the command to get the url of your dbs.

db.js

```js
import mongoose from "mongoose";

// connect to the local mongo dbs.
mongoose.connect("mongodb://127.0.0.1:27017/wetube",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// import the file.
```

## 6.9 CRUD Introduction

- You have to plan how your dabase will look like. 
- CRUD: CREATE, READ, UPDATE, AND DELETE. operation
- We are building this project because you build small concept and expand it to different things. 
- focus only on Mongoose. 
- create CRUD. 
- Create a folder called models
- We need to tell mongoose how does our data look like. 
- Then, Mongoose will help us search, delete, and create new things. 

## 6.10 How do you create a video model

- Define the shape of the model: schema. 
- 
item.js

```js
import mongoose from "mongoose";


// you can make the array of something - type string
// hashtags, an array of String.
// 
const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
      views: Number,
      rating: Number,
    },
})

// name of the model and the schema, which you already created.

const Video = mongoose.model("Video", videoSchema);
export default Video;
```

After you are done describing the shape of an data, you import it to the server.js.
- Mongoose will validate the data as we describe the shape. We 

## 6.11 Query

- We defined the shape of the data and we created a model. 
- Create a new file just to seperate. 
- init.js (initialize everything)
- Server: configuration, or express
- Init: initize the server.

*How do you query the data?*

03202023

- Create a item shcema
Location: src/models/items.js

- Write a schema for item at the local store
- Import`
```js
import mongoose from "mongoose";


// you can make the array of something - type string
// 
const itemSchema = new mongoose.Schema({
    title: String,
    manufacturer: String,
    distributer: String,
    description: String,
    createdAt: Date,
    Count: String,
    price: Number,
})

// parameter (name of the model, schema)
const Item = mongoose.model("item", videoSchema);

export default Item;


```
- We have to make db file aware that there is a video model.

## 6.11 Our First Query

- We are going to seperate init.js from server.js or app.js because server is setarting and importaing app. 
- 

*How do you access your DB?*

Do the calculation from the Controller. 
- impoty Item from the model. 
- look at the Query documentation
https://mongoosejs.com/docs/queries.html

- It could be used as a calleback or a promise.
- Callback is a way of waiting in the javascript. When we are connected, you want to fun the next function.
- We have to wait for the data to come. We are communicating something outside the Javascript. 
- You can use a callback or Promise

*How do you use a callback?*
```js
export const home = (req, res) => {
  Video.find({}, (error, videos) => {});
  return res.render("home", { pageTitle: "Home" });
```

- Callback is an old way of getting data.
- Instead,k you can use teh promise.

- To catch an error, you have to use try and catch.

# 6.12 Our First Query part Two

# 6.13 Async Await

# 6.14 Returns and Renders

- If you render twice, it will be executed.
- Express will show the error. 
- Return will end an execution of the code.
- Not about the return but it is about render. 
- You cannot redirect and render at the same time. 

videoController.js
```js
 const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};
```

# 6.15 Creating a video

- urlencoded need to be installed before you use the req.body
- shortcut to creating a post and get route
```js
globalRouter.route("/").get(handleHome).post(handleAdd);
```

# 6.16 Creating video pt.2


- We can make the addItem as async and await until the Video gets created.
- You can either save the data using Model.create or Model.save
- If you try to save the data with a wrong data type, you will not be able to save it because db will catch that error. Mongoose will match the data type with a model and sort out wrong information.

# 6.17 Exception and Validation

- If you don't send the date, it will create the DB data without an issue. 
- In order to require users to include all data, you can make it required.
- You can use try and catch to catch error messages. 

- Schema can have a default value and we can make the value required by setting required attribute true.
- 
Video.js
```js
import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  // required requires a value.
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  // default: will set the default value.
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});
```

## 6.18 Schema

- You can add multiple attirbutes for schema.
- you can call lowercase or uppercase
- lowercase: true.
- trim will trim the spaces in behind and front.
- minLength, maxLength.
- 
```

```
- Enforce data from both the front and the backend.
- 

## 6.19 Detail page. 
- In the detail page, you are viewing the data in a close up. 
- regular expression
- /[0-9a-f]{24}/g
- any characters or number with length 24
- We can use that on the Router and add the detail page. 
- Use findOne(): findbyId - will find by ID
- Once video is found, you can send the data into the item page and you can display the details as you would like. 
- 

## 6.20 Create an edit page.
- You can create an edit page that contains ways to edit. 
- Find one and send the id
- Get the inputs -> modify the one that has a specific id.
- 

*How do you handle some users that attempt to get into the item detail page with id that doesn't eixst?*
- If you don't take care of this, it will continue load in the backend. (NOT GOOD)
- When you test, you have to test many cases.
- What if the video doesn't exist. 
- You may need to modify the error message. 
- you can handle the video not found. you can cretae 404 page and send the tittle with an error message. 
- getEdit, postEdit (add the modified data and send user home.)
- 

20230406

- We are going to deploy to Heroku
- We have to create a production environment. 
- We need to build and minify the code. 
- Babel-node is only meant to run it on the dev environment because 

- Install Babel CLI
```js
npm install --save-dev @babel/core @babel/cli
```

- create a build server script
- We are going to build a src/init.js -d (directory) where does the build code going to go?

- run a build script that build the whole src directory. 
- When you look into the build folder, you see that everything is a compatible javascript.
- run on the start script. 
- IF the views folder doesn't exist, how can you see the changes or the data. 
- Build backend is going to src and see the 
- We are going to build a client code and make it for production. We have to compress the code. 
- There are some work to do with the CSS / webpack but I am going to skip it for now. 
- Just move directly to Heroku deployment and see what happens. 
- 

20230410

# Deployment

- once you create a remote place to push your code.
- You have to commit in order for heroku to see your folder.
- view the server in a real time
```js
heroku logs --tail
```