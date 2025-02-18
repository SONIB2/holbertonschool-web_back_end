DELIMITER $$

CREATE PROCEDURE AddBonus(
    IN user_id INT,
    IN project_name VARCHAR(255),
    IN bonus INT
)
BEGIN
    DECLARE project_id INT;

    -- Get the project ID based on the project name
    SELECT id INTO project_id
    FROM projects
    WHERE name = project_name;

    -- If the project does not exist, insert it and get the project ID
    IF project_id IS NULL THEN
        INSERT INTO projects (name) VALUES (project_name);
        SET project_id = LAST_INSERT_ID();
    END IF;

    -- Check if the correction already exists
    IF EXISTS (SELECT 1 FROM corrections WHERE user_id = user_id AND project_id = project_id) THEN
        -- Update the existing correction
        UPDATE corrections SET score = score + bonus WHERE user_id = user_id AND project_id = project_id;
    ELSE
        -- Insert a new correction with the bonus score
        INSERT INTO corrections (user_id, project_id, score) VALUES (user_id, project_id, bonus);
    END IF;
END$$

DELIMITER ;
