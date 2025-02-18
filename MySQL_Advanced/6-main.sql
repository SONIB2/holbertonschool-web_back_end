-- 6-main.sql

-- Krijimi i tabelës së projekteve
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Krijimi i tabelës së korrigjimeve
CREATE TABLE IF NOT EXISTS corrections (
    user_id INT NOT NULL,
    project_id INT NOT NULL,
    score INT DEFAULT 0,
    PRIMARY KEY(user_id, project_id),
    FOREIGN KEY(project_id) REFERENCES projects(id)
);

-- Disa të dhëna shembull për projektet
INSERT INTO projects (name) VALUES
('Python is cool'),
('AI and Machine Learning'),
('Data Science for All');

-- Disa të dhëna shembull për përdoruesit dhe bonuset
INSERT INTO corrections (user_id, project_id, score) VALUES
(1, 1, 100),
(2, 2, 150);
