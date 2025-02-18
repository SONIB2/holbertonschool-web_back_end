-- 5-init.sql

-- Drop the table if it already exists to avoid errors
DROP TABLE IF EXISTS users;

-- Create the users table with necessary columns
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    valid_email BOOLEAN NOT NULL DEFAULT 0,  -- Column to store the email validation state
    PRIMARY KEY (id)
);

-- Insert sample data into the users table
INSERT INTO users (email, name) VALUES ("bob@dylan.com", "Bob");
INSERT INTO users (email, name, valid_email) VALUES ("sylvie@dylan.com", "Sylvie", 1);
INSERT INTO users (email, name, valid_email) VALUES ("jeanne@dylan.com", "Jeanne", 1);
