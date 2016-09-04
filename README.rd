##To run the app with Node.js and MongoDB (without Docker):

1. Install and start MongoDB (https://docs.mongodb.org/manual/installation).

2. Install Node.js (http://nodejs.org).

3. Open `config/config.development.json` and adjust the host name to your MongoDB server name (`localhost` normally works if you're running locally).

4. Run `npm install`.

5. Run `node dbSeeder.js` to get the sample data loaded into MongoDB. Exit the command prompt.

6. Run `node server.js` to start the server.

7. Navigate to http://localhost:8080 in your browser.


To Run it with docker follow this tutorial:
- http://magento2-tuts.blogspot.de/2016/09/docker-link-nodejs-container-with.html
