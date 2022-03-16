<img src="/screenshots/Screenshot1.png" width="100%" />

# NoteScout :blue_book:
**NoteScout** is a fullstack web app that helps you easily create and organize your notes

#### Here is a live demo
https://notescout.herokuapp.com/

<br>
<img src="/screenshots/Screenshot2.png" width="100%" />

## About :dart:
**NoteScout** lets users create an account on the server. Once successful, the users can easily create and organize their notes on the cloud storage. Additionally, the web app also lets a user create a note in **Markdown Format!**

## Project Stack :bulb:
The project at its core is built on MERN Stack which stands for (MongoDB, ExpressJS, ReactJS and NodeJS)
* [ReactJS](https://reactjs.org/docs/getting-started.html) - ReactJS is a javascript library created by Facebook. This library lets you create beautiful web pages in couple of minutes!
* [NodeJS](https://nodejs.org/en/about/) - NodeJS is something that allows you to write javascript code on a server! Traditionally, javascript was only available for frontend design purpose however, with NodeJS, you can use javascript for backend purpose too!
* [ExpressJS](https://expressjs.com/) - ExpressJS is a framework that drastically reduces the amount of backend code we write in NodeJS. It is highly flexible and makes things a lot easier!
* [MongoDB](https://www.mongodb.com/) - MongoDB is a NoSQL Database that unlike SQL, stores data in form of collections!

<br><br>
<img src="/screenshots/Screenshot3.png" width="100%" /><br>
**NoteScout** is highly responsive in terms of its design! No matter what size of device you use, the web app will run perfectly fine on it!

## Supporting Libraries / Frameworks / Packages used &nbsp; 🛠
* [MaterialUI](https://mui.com/) - MaterialUI is a ReactJS library developed by google that lets you create beautiful UI elements in a quick go!
* [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start) - React Router DOM is a NPM package that easily lets you tell the app about which web page or screen component to render depending upon a particular URL
* [React Markdown](https://www.npmjs.com/package/react-markdown) - ReactMarkdown is another NPM package that helps you render a text in markdown format on a web page
* [Mongoose](https://mongoosejs.com/) - Mongoose is a library that enables you to easily implement MongoDB in your code
* [Lottie React](https://www.npmjs.com/package/lottie-react) - Lottie React is an npm package that lets you render Lottie JSON animations on the web page
* [Axios](https://www.npmjs.com/package/axios) - Axios is an NPM package that lets you easily send HTTP requests to a particular URL
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) - It is a package that lets you make use of JWT authentication in your app
* [Concurrently](https://www.npmjs.com/package/concurrently) - Another NPM package, Concurrently lets you execute two commands parallely or concurrently in the terminal. You can use it to run your feontend and backend at same time in your project!
* [BCryptJS](https://www.npmjs.com/package/bcryptjs) - This is an NPM package that lets you encrypt the passwords before you store them on the server
* [DotENV](https://www.npmjs.com/package/dotenv) - This NPM package lets you securely create environment variables in .env file

## Project Setup :pencil:
If you want to clone this project and customize it further, you need to do a couple of tasks first:
* Create an account on [Mongo DB Cloud](https://cloud.mongodb.com/) if you don't have any hosting to create the database. Or install MongoDB on your hosting in case you have one
* Create an account on [Cloudinary](https://cloudinary.com/). It is the place where we will store the profile pictures of all the users.
* Clone this project. You can directly download the source code, or you can use the CLI in terminal
* Once successful, open your terminal in the project folder and write npm install
* After this, in the root folder of the project, create a new file with the exact name of ".env"
* In the .env file, write:<br><br>

```
PORT = 3000
MONGO_URI=mongodb+srv://YOUR_MONGO_CLOUD_USERNAME:YOUR_MONGO_CLOUD_PASSWORD@cluster0.p5xoz.mongodb.net/Cluster0?retryWrites=true&w=majority<br>
NODE_ENV=development
JWT_CODE=YOUR_NAME
```

* In LoginSignupTab.js, inside const configureProfilePicture function, change fetch() url to https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_ACCOUNT_USERNAME/image/upload and ensure you have enabled unsigned uploads on your cloudinary console
* Save the file and then in terminal, write npm run dev and enjoy the project :)
<br>

#### Production Build :computer:
* To build the project for production purpose, In .env file, set NODE_ENV to production
* In terminal, open the frontend folder and write npm run build
* Once the build is completed, move back to root directory of folder by writing cd .. and then start the server again to test the code in production mode

## Project Purpose :checkered_flag:
The purpose of this project is to demonstrate how a person can
* Implement user authentication and authorization in a NodeJS app using [JWT](https://jwt.io/) and Bearer Token
* Implement [MaterialUI](https://mui.com/), [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) and [CSS Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) to create beautiful UI Components
* Implement [MongoDB](https://www.mongodb.com/) in the app to store user accounts and their corresponding notes
* Implement [Markdown](https://en.wikipedia.org/wiki/Markdown) Note Rendering using ReactJS
* Implement Backend [Routing](https://en.wikipedia.org/wiki/Routing#:~:text=Routing%20is%20the%20process%20of,networks%2C%20such%20as%20the%20Internet.) using routes, middlewares and controllers with NodeJS
* Implement Frontend Routing using [React Router DOM](https://v5.reactrouter.com/web/guides/quick-start)
* Create a [Restful API](https://en.wikipedia.org/wiki/Representational_state_transfer) in NodeJS
* Perform [CRUD operations](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) on data in MongoDB
* Store media data like user profile pictures on a cloud storage like [cloudinary](https://cloudinary.com/)
* Deploy the app on a cloud hosting like [heroku](https://www.heroku.com)

## Project Architecture and Structure :open_file_folder:
<img src="/screenshots/AppStructure.png" width="100%" /><br>

    # Root Package
    .
    ├── backend             # All our backend code
    |   ├── config          # Configuration files like db.js to configure MongoDB
    |   ├── controllers     # Files that contain all our logic corresponding to specific routes
    │   ├── middlewares     # Contains files like authMiddleware which will check whether user is authenticated or not on any incoming request
    │   ├── models          # Files that define the structure of each user and note in MongoDB
    │   ├── routes          # Defines endpoints of our backend
    │   ├── util            # Utility files for generating JWT token and enhancing the workflow of project
    │   └── server.js       # Main backend file that starts our server and binds everything together
    |
    ├── frontend            # All our frontend code
    |   ├── build           # Folder that binds our backend code for production purpose, to generate it, use npm run build
    │   ├── public          # Contains files that can be accessed publically such as index.html
    │   └── src             # Our core frontend code consisting of all views and react components
    |
    |
    └── ProcFile            # [Optional] Used to deploy the app on heroku
    
    
    # ReactJS frontend -> src
    .
    ├── src                 # Our core frontend code consisting of all views and react components
    |   ├── assets          # Contains lottie animation .json files
    |   ├── components      # Contains files for single note cards, login signup tab,header, footer, snackbar etc
    │   ├── pages           # Contains files to represent the screen for each route like LandingPage.js for '/', ProfilePage.js for '/profile' etc
    │   ├── styles          # Contains theme.js for defining a theme for MaterialUI
    │   ├── stylesheets     # Contains CSS files for each view component
    │   ├── App.css         # CSS file to provide a common styling to our app such as font family and box sizing
    │   ├── App.js          # Our main frontend ReactJS file that is executed when server starts
    │   ├── AppContext.js   # ReactJS ContextAPI file to allow all components access a particular react state easily
    │   └── index.js        # A ReactJS file to render all the data on web page
    └──

## Screenshots (Desktop) :computer:
|||
|:----------------------------------------:|:-----------------------------------------: |
| ![](screenshots/screenshot_landingpage.jpg) | ![](screenshots/screenshot_signuptab.jpg)
| ![](screenshots/screenshot_noteshomepage.jpg) | ![](screenshots/screenshot_updatenote.jpg)  
| ![](screenshots/screenshot_profilescreen.jpg) | ![](screenshots/screenshot_updatenote.jpg) 
| ![](screenshots/screenshot_profilescreen.jpg) | ![](screenshots/screenshot_markdown.jpg) 

## Screenshots (Mobile) :iphone:
||||
|:----------------------------------------:|:-----------------------------------------:|:-----------------------------------------: |
| ![](screenshots/screenshot_responsive_landingpage.jpeg) | ![](screenshots/screenshot_responsive_logintab.jpeg) | ![](screenshots/screenshot_responsive_noteshomepage.jpeg)
| ![](screenshots/screenshot_responsive_createnotepage.jpeg) | ![](screenshots/screenshot_responsive_profilepage.jpeg) | ![](screenshots/Screenshot4.png) 

## Deploying Project on Heroku :heavy_check_mark:
It is super easy to deploy the project on heroku! <br>
* Make sure you have comitted your project using git after running the npm run build command. 
* Then, create an account on www.heroku.com
* Install heroku CLI. For windows, you can simply download it and in case of linux, in terminal, write:
```
sudo snap install --classic heroku
```

And then, in VSCode Terminal, write:

```
cd frontend
npm run build
cd ..
heroku login
git push heroku master
```
And then open your heroku URL to see the website running live :)


#### Note :bangbang:
The heroku website link that I have provided for this project on the top may run slow when you open it for the first time. It is also possible that you may see an empty red snackbar. This is because of slow internet connection or timeout error. This error will go away on its own if you wait for 1-2 minutes after opening the heroku link and then reload the web page

## Contact
For any queries, you can mail me at developerishant710@gmail.com

