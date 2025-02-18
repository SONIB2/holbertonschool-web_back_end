-- Display existing records in the users table
SELECT * FROM users;

-- Insert some users into the table
INSERT INTO users (email, name) VALUES ('bob@dylan.com', 'Bob');
INSERT INTO users (email, name) VALUES ('sylvie@dylan.com', 'Sylvie');

-- Show records after insertion
SELECT * FROM users;

-- Attempt to insert a duplicate email to test the UNIQUE constraint
INSERT INTO users (email, name) VALUES ('bob@dylan.com', 'Jean'); -- This should fail

-- Show the final state of the users table to ensure the duplicate was not inserted
SELECT * FROM users;
