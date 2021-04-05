CSV Data App: 
client-server app for processing and querying CSV files.
developed with Nodejs(^10.6), PostgreSQL(^9.6) and React.


Assumptions:
1. The server and client are both running on the same machine
2. The user will use the app after first initialization of the DB struct (15 columns, text or integer type)


Instructions to initialize DB:
1. Install PostgreSQL(^9.6) for Windows 
(https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
2. Run in the command line - 
pg_ctl -D "C:\Program Files\PostgreSQL\9.6\data" start
3. To prompt SQL shell run in another command line -
psql -U postgres
4. In the shell write a command to create db -
CREATE DATABASE [db name];
5. In the shell write a command to connect to the db-
\c [db name]
6. In the shell write a command to create a table -
CREATE TABLE data
([column name] [column type]);


Instructions to run the project:
1. Run the command 'npm install' from the root directory of the project, and in the 'fronend' directory.
2. Run the command 'npm start' in the root directory of the project.
3. In a different command line, run the command 'npm start' in the 'fronend' directory.