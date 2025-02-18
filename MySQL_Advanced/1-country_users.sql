-- Disable foreign key checks temporarily
SET foreign_key_checks = 0;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    country ENUM('US', 'CO', 'TN') NOT NULL DEFAULT 'US'
);

-- Enable foreign key checks back
SET foreign_key_checks = 1;
