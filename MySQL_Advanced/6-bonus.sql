-- 6-bonus.sql

DELIMITER $$

-- Procedura për të shtuar bonusin për një përdorues për një projekt
CREATE PROCEDURE AddBonusTest(IN user_id INT, IN project_name VARCHAR(255), IN bonus INT)
BEGIN
    DECLARE project_id INT;

    -- Gjej id e projektit bazuar në emrin e projektit
    SELECT id INTO project_id FROM projects WHERE name = project_name LIMIT 1;

    -- Kontrollo nëse projekti ekziston
    IF project_id IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Project not found';
    END IF;

    -- Shto bonusin në tabelën e korrigjimeve
    INSERT INTO corrections (user_id, project_id, score)
    VALUES (user_id, project_id, bonus)
    ON DUPLICATE KEY UPDATE score = score + bonus;

END$$

DELIMITER ;
