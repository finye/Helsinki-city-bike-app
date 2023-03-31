# Helsinki-city-bike-app

This web application was done as a pre-assignment for Solita Dev Academy. The project is built using TypeScript and Nodejs on the server side. React is used for the frontend and Docker-compose is used to run PostgreSQL database. 

## Scripts to run the app

Make sure you have Node.js, Docker-compose, psql and NPM installed.

Install dependecies from the root level by using the command:
`npm install` 


Create a database named city_bikes by running this command (insert your password):

`docker run --name city_bikes -e POSTGRES_PASSWORD=<password> -d postgres`

Start the container using:
`docker-compose up`

Create journey table using:
`npm run create-journey-table`

Create station table using:
`npm run create-stations-table`

Navigate to the project's directory 
packages/server/dataset  and save journey and stations data.

Populate journey table using:
`npm run populate-stations-table`

Populate station table using:
`npm run populate-journeys-table`

To run the project use:
`npm start`
in the project directory. 