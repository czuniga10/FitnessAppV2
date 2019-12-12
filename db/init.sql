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
    id SERIAL PRIMARY KEY,
    programID INT REFERENCES program(id),
    workoutID INT REFERENCES workout(id),
    sets TEXT,
    reps TEXT,
    iscomplete TEXT default 'f'
 );

 --   TEST DATA 

INSERT INTO users ( first_name, last_name, email, password )
VALUES
    ('TEST', 'ME', 'test@test.com', 'pword1'),
    ('USER', 'TEST', 'no@email.com', 'pword2'),
    ('New', 'USER', 'nope@email.com', 'pword3'),
    ('Testy', 'McTesterson', 'testy@email.com', 'pword4')
;

INSERT INTO workout ( name )
VALUES
    ('Bench Press'),
    ('Dumbell Curls'),
    ('Tricep Extensions'),
    ('Back Squats'),
    ('Pull Ups'),
    ('Sit Ups'),
    ('Cable Curls'),
    ('Clean and Jerk'),
    ('Shoulder Press'),
    ('Cardio')
;

INSERT INTO program ( userID, name )
VALUES
    (1, 'Heavy Day'),
    (1, 'Light Day'),
    (2, 'Monday'),
    (2, 'Wednesday'),
    (2, 'Friday')
;

INSERT INTO program_workouts ( programID, workoutID, sets, reps )
VALUES
    (1, 1, '3', '10'),
    (1, 2, '3', '12'),
    (2, 3, '5', '6'),
    (2, 5, '5', '6')
;