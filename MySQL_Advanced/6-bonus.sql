DELIMITER $$

CREATE PROCEDURE AddBonusTest(IN user_id INT, IN project_name VARCHAR(255), IN bonus INT)
BEGIN
    DECLARE project_id INT;
    
    -- Find project_id based on project_name
    SELECT id INTO project_id FROM projects WHERE name = project_name;

    -- Check if project exists
    IF project_id IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Project not found';
    END IF;

    -- Add the bonus to the corrections table
    INSERT INTO corrections (user_id, project_id, score)
    VALUES (user_id, project_id, bonus)
    ON DUPLICATE KEY UPDATE score = score + bonus;
END$$

DELIMITER ;
