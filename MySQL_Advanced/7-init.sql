-- Initial setup
DROP TABLE IF EXISTS corrections;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS projects;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    average_score FLOAT DEFAULT 0,
    PRIMARY KEY (id)
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Create corrections table
CREATE TABLE IF NOT EXISTS corrections (
    user_id INT NOT NULL,
    project_id INT NOT NULL,
    score INT DEFAULT 0,
    KEY `user_id` (`user_id`),
    KEY `project_id` (`project_id`),
    CONSTRAINT fk_user_id FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
    CONSTRAINT fk_project_id FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE
);

-- Insert sample users
INSERT INTO users (name) VALUES ("Bob");
INSERT INTO users (name) VALUES ("Jeanne");

-- Insert sample projects
INSERT INTO projects (name) VALUES ("C is fun");
INSERT INTO projects (name) VALUES ("Python is cool");

-- Insert corrections (scores for users in projects)
INSERT INTO corrections (user_id, project_id, score) VALUES (1, 1, 80);
INSERT INTO corrections (user_id, project_id, score) VALUES (1, 2, 96);

INSERT INTO corrections (user_id, project_id, score) VALUES (2, 1, 91);
INSERT INTO corrections (user_id, project_id, score) VALUES (2, 2, 73);
