--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    users,
    workout,
    program,
    program_workouts
;

--Keep the order of the CREATE TABLE inserts the same

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT unique, 
    password TEXT
 );

 CREATE TABLE workout (
     id SERIAL PRIMARY KEY,
     name TEXT
 );

 CREATE TABLE program (
    id SERIAL PRIMARY KEY,
    userID INT REFERENCES users(id),
    name TEXT
 );

 CREATE TABLE program_workouts (
    programID INT REFERENCES program(id),
    workoutID INT REFERENCES workout(id),
    sets TEXT,
    reps TEXT,
    isComplete BOOLEAN
 );

 --   TEST DATA 

INSERT INTO users ( first_name, last_name, email, password )
VALUES
    ('TEST', 'ME', 'test@test.com', 'pword1')
;