-- Create the trigger to reset valid_email to 0 when the email is updated
DELIMITER $$

CREATE TRIGGER email_update BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    -- Check if the email is being updated
    IF OLD.email <> NEW.email THEN
        SET NEW.valid_email = 0;  -- Reset the valid_email attribute
    END IF;
END $$

DELIMITER ;
