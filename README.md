# Habit-tracker
this this login/rajisteresd page where usre submit theire email, usre-name and password to inter in it.
![image](https://user-images.githubusercontent.com/103310054/186965305-eb86ee46-8d83-4f10-8c88-510e3b2b8f94.png)
# wlecome page where usre can enter theire habbit daily.
![image](https://user-images.githubusercontent.com/103310054/186966686-8316f7bf-c2dc-4ea9-9dae-623efef85c0f.png)

# welcome page whrere usrer enter theire habit weekly.
![image](https://user-images.githubusercontent.com/103310054/186966263-0db72c74-b900-41e6-9c98-4deaf1c88f59.png)
#link:  https://habittrk.herokuapp.com/ deployed to Heroku
link: https://habittrk.herokuapp.com/ | https://git.heroku.com/habittrk.git

A scalable full stack web application which lets users **track their activities throughout the day and for the entire week and maintain weekly streaks**.
Deployed at :
# Tech Stack Used:
## Node.js:
   for server-side scripting.
## Express.js:
   as a backend framework to implement MVC Structure.
## Passport.js:
   as an Authentication middleware for Node.js. Implemented **passport-local-strategy** 
## MongoDB:
   as the database for storing all the data related to users and session cookies.
## Bootstrap:
   for designing the front end of the web application.
   
# Key Features:
  - Users can sign in using their email addresses.
  - Upon signing in, users will be directed to the dashboard where in they can add a new habit.
  - After adding a new habit, user can update it's status as Done/Not Done/None for the day from the dashboard.
  - On updating the status for the day, the users will the directed to the weekly dashboard where in they can update their status for the entire week.
  - According to the weekly status of a particular habit of the user, the weekly streak is automatically maintained.
    


# To run the project on your local machine:

  1) Open terminal. 
 
  2) Change the current working directory to the location where you want the cloned directory.
  
  ```
  $ git clone
  ```
  
  3) Install all the dependencies by running :
  
  ```
  npm install
  ```
  
  4) Run npm start to run the project at local host, port 8050:
  
   ```
  npm run dev
  ```
  
  5) In your browser, enter the URL :
  
  ```
  localhost:8050/
  ```
