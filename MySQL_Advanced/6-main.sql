-- Creating the tables with the correct foreign keys and structure

CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS corrections (
    user_id INT NOT NULL,
    project_id INT NOT NULL,
    score INT DEFAULT 0,
    PRIMARY KEY(user_id, project_id),
    FOREIGN KEY(project_id) REFERENCES projects(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Inserting sample data
INSERT INTO projects (name) VALUES
('Python is cool'),
('AI and Machine Learning'),
('Data Science for All');

INSERT INTO users (name) VALUES
('John Doe'),
('Jane Smith'),
('Alice Johnson');

INSERT INTO corrections (user_id, project_id, score) VALUES
(1, 1, 100),
(2, 2, 150);
