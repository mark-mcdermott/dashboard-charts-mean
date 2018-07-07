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

`npm run dev`

In the third tab:

`cd frontend`

`npm install`

`ng serve`

In Robo 3T, add a `issues` db and add an `issues` collection to it and add a couple issues to it like these:

```
{
    "status": "Open",
    "_id": "5b3fb6f3244ae1fe37747447",
    "title": "First issue",
    "responsible": "Mark",
    "description": "first issue",
    "severity": "Medium"
},
{
    "status": "Open",
    "_id": "5b3fb710244ae1fe37747448",
    "title": "Second issue",
    "responsible": "Mark",
    "description": "second issue",
    "severity": "Danger"
}
```

Now go to http://localhost:4200/list and you should see the data populating the page.
