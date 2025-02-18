DELIMITER $$

CREATE TRIGGER before_email_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    -- Reset valid_email only if email is changed
    IF OLD.email <> NEW.email THEN
        SET NEW.valid_email = 0;
    END IF;
END $$

DELIMITER ;
