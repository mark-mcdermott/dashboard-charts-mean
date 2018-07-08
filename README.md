# MEAN Dashboard Charts App

Angular 6 Material frontend with Mongo/Express backend

Code based in part off this codingthesmartway.com tutorial:

https://codingthesmartway.com/angular-6-mean-stack-crash-course-part-1-front-end-project-setup-and-routing/

## To Run
Open three terminal tabs:

In the first tab:

Run `mongod` and leave it running

In the second tab:

`cd backend`

`npm install`

`cd data`

`sudo ./importdata.sh`

`cd ..`

`node server.js`

In the third tab:

`cd frontend`

`npm install`

`ng serve`

Now go to http://localhost:4200/list and you should see the data populating the page.
