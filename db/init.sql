--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    users
;

--Keep the order of the CREATE TABLE inserts the same

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    first_name TEXT,
    last_name TEXT,
    email TEXT unique, 
    password TEXT
 );

 --   TEST DATA 

INSERT INTO users ( username, first_name, last_name, email, password )
VALUES
    ('user123', 'TEST', 'ME', 'test@test.com', 'pword1')
;