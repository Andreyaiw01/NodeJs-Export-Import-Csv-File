# Node App with Node.js + Express + MySQL

The application has a list of users. You can import and export csv file with users. Csv file upload to server and to database. Response in JSON format. All data is stored in the MySQl database. <br />

There are several endpoints:

1. Download the CSV file. The file must be parsed and stored in the database
2. Get a collection of users in json format
3. Download the CSV file. It is necessary to serialize a collection of users from the database to a CSV file and send it.


## Start App

For the application, you need to create a MySQL database and connect it by changing the settings in the file /config/db.config.js. <br />
Then to run the App you need to start the server. For example, by running the command - node server.js or npm start. <br />
By default, the server runs on port 3000. You can change this in the file server.js.


## Database

The MySQL database should contain two tables: "users".

### Users table
The Users table should contain the following columns :
- id (MEDIUMINT 9 AUTO_INCREMENT );
- UserName (VARCHAR 255);
- FirstName (VARCHAR 255);
- LastName (VARCHAR 255);
- Age (INT 10)


## API

### Users
- / (GET) - returns a list of all users;
- / (POST) - Download the CSV file. Required columns in CSV file: "UserName", "FirstName", "LastName" , "Age". Separator - ";". Required name of csv file - "data.csv".
- /download-csv (GET) - downloads CSV file with all users in database. Response - all users.





