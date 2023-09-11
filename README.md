# Helsinki-city-bike-app

This project is built using TypeScript and Node.js on the server side. React is used for the frontend and Docker is used to create and run PostgreSQL database. The application also runs in Docker.

## Scripts to run the app

Make sure you have Node.js, Docker Compose and NPM installed.

Install dependecies from the root level by using the command:
`npm install`

Build and Start the containers by using this command from the root level:
`docker-compose up`

Navigate to packages/server directory and Create journey table using:
`npm run create-journey-table`

From the same directort, Create stations table using:
`npm run create-stations-table`

Navigate to the project's directory
packages/server/dataset and save the journey and stations data inside the dataset folder.

Use these specific names to save your file:
`city_bike_journeys.csv` and `city_bike_stations.csv`

Populate journey table from the packages/server/ directory using:
`npm run populate-stations-table`

Populate stations table from the packages/server/ directory using:
`npm run populate-journeys-table`

The project is already started and running inside Docker. The ports 3000 and 3001 are used to map the docker containers. The react app runs on
`http//localhost:3000` and the server runs on `http//localhost:3001`.

On the react app, the station table is shown on the Homepage by default. you can switch between journey and stations view by clicking the Stations and Journeys buttons on the header.

The tables show 20 rows per page. You can use the next & prev page buttons to access more table data.

You can order both tables per column by clicking on the column you want to order the table with.

You can view a specific station information by clicking on station table rows.

You can search specific journey in the journey table using departure or return station names.
