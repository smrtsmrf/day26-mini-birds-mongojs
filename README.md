# mini-birds-mongojs
 
_Goal_: Build a **bird sighting** API in Express using four common CRUD operations in MongoDB using MongoJS.

## Sample Data

Note the following sample data, for sightings:

```json
[{
  "name": "red breasted merganser", 
    "order": "Anseriformes", 
    "status": "least concern"
},
{
  "name": "cedar waxwing", 
  "order": "Passeriformes", 
  "status": "least concern"
},
{
  "name": "osprey", 
  "order": "Accipitriformes",
  "status": "extinct"
},
{
  "name": "snowy plover", 
  "order": "Charadriformes", 
  "status": "near threatened"
}]
```

## Step 1: Clone the repo

<!-- Create your Express.js app by cloning this repository. -->

## Step 2: Install the NPM modules

```
npm install
```

## Step 3: Test it

<!-- Start your application by running: -->
 
```
node server.js
```

<!-- Test each of your endpoints in Postman with the following URLs: -->

* **POST** `/api/sighting`
* **GET** `/api/sighting?region=america`
* **PUT** `/api/sighting?id=some-id`
* **DELETE** `/api/sighting?id=some-id`

<!-- If everything's working, you'll see console output each time you hit your endpoints. -->

## Step 4: Start mongod

<!-- Start the mongo daemon in a separate terminal window. -->

## Step 5: Require and connect to Mongo

<!-- Now, require the MongoJS module, and create a database by connecting to it in `server.js`. Name your database `birds`. -->

HINT: [Read the documentation](https://github.com/mafintosh/mongojs)

## Step 6: Declare your `sightings` collection

<!-- Create a var that references a collection called `sightings`. -->

## Step 7: Upgrade 'POST' endpoint to record a sighting

<!-- Upgrade your POST endpoint with code to create a sighting document from the `body` of the request. The body should include `name`, `order`, and `status`. -->

<!-- For steps 7 through 10, test each of your endpoints again. Note the sample data above for your tests. -->

## Step 8: Upgrade 'GET' endpoint to retrieve a sighting

<!-- Modify the GET endpoint to retrieve all sightings with a given `status`, as stated in the request query. -->

## Step 9: Upgrade 'PUT' endpoint to modify a sighting's order

<!-- Update your PUT endpoint to accept a `body` modifying an existing sighting's `order` field. Use the `id` parameter in the query string to identify the sighting to change. -->

## Step 10: Upgrade 'DELETE' endpoint to delete a sighting

<!-- Update your DELETE endpoint to delete a sighting document by `id` in the query string. -->
