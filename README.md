To test deployment I pushed the online store project to Heroku. I will be referencing this example repo throughout the tutorial.

* Based on [these](https://open.appacademy.io/learn/swe-online/swe-online---graphql-curriculum/deploying-with-graphql-and-apollo) instructions, add two scripts to your [package.json](https://github.com/trevoruptain/ExampleDockerDeployment/blob/master/package.json):
  * `start` runs your Node application.
  * `heroku-postbuild` will run after deployment. This script installs the dependencies in the client folder and runs the React build script, which creates a build folder in the client directory serving up an index.html and the bundled JavaScript from your React project. This will be the root of our project in production.
* We need to tell our server to use the root index file when we are working in a production environment. To do this, add the following conditional in your [server](https://github.com/trevoruptain/ExampleDockerDeployment/blob/master/server/server.js) file:

```javascript
const path = require("path")

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
```

Since we will not be running two servers in production, we need to configure Apollo to use the server’s `/graphql` endpoint in production instead of the `localhost:5000/graphql` endpoint we use in development. Add this conditional and update `httpLink` in your client’s [index.js](https://github.com/trevoruptain/ExampleDockerDeployment/blob/master/client/src/index.js):

```JavaScript
let uri;

if (process.env.NODE_ENV === "production") {
  uri = `/graphql`;
} else {
  uri = "http://localhost:5000/graphql";
}

const httpLink = createHttpLink({
  uri,
  headers: {
    authorization: localStorage.getItem("auth-token")
  }
});
```

* Now it’s time to create the [Dockerfile](https://github.com/trevoruptain/ExampleDockerDeployment/blob/master/Dockerfile). When run this will create a Node environment, install root dependencies, runs the `heroku-postbuild` script we created earlier (which installs client dependencies), and starts the server by running `npm start`.
* You should also create a [.dockerignore](https://github.com/trevoruptain/ExampleDockerDeployment/blob/master/.dockerignore)
* Test your app locally before attempting to deploy:
  * Add the [docker-compose.yml](https://github.com/trevoruptain/ExampleDockerDeployment/blob/master/docker-compose.yml) and [Dockerfile.web](https://github.com/trevoruptain/ExampleDockerDeployment/blob/master/Dockerfile.web) files to your project.
    * Make sure to add your own MONGO_URI
  * Test that everything works locally by running `docker compose-up -d`.
* You will need to [add your environment variables](https://devcenter.heroku.com/articles/config-vars) to Heroku. I had to add all three of these since the one in the `Dockerfile` did not work for me:
  * `MONGO_URI`
  * `secretOrKey`
  * `NODE_ENV=production`
* We’re ready to login to Heroku and deploy our container. On [this](https://open.appacademy.io/learn/swe-online/swe-online---docker-curriculum/example-docker-push-to-heroku) page, follow steps 1-4 in the `Pushing to Heroku` section.
  * Keep an eye out for any error messages. Don’t worry too much about `npm warn` messages.
* Once the app is deployed, run `heroku open` to check your deployment.
* If the deployment was unsuccessful, run `heroku logs` to see what kind of errors were logged.
