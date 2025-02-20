DELIMITER $$

CREATE PROCEDURE AddBonus (
    IN user_id INT,
    IN project_name VARCHAR(255),
    IN score INT
)
BEGIN
    DECLARE project_id INT DEFAULT NULL;

    -- Try to find the project ID using the given project name
    SELECT id INTO project_id
    FROM projects
    WHERE name = project_name
    LIMIT 1;

    -- If project doesn't exist, create a new one
    IF project_id IS NULL THEN
        INSERT INTO projects (name) VALUES (project_name);
        SET project_id = LAST_INSERT_ID();
    END IF;

    -- Insert the correction into the corrections table
    INSERT INTO corrections (user_id, project_id, score)
    VALUES (user_id, project_id, score);

END $$

DELIMITER ;
