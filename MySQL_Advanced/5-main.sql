-- Show users before update
SELECT * FROM users;

-- Update email and check the valid_email status
UPDATE users SET valid_email = 1 WHERE email = "bob@dylan.com";  -- Manually set valid_email to 1
UPDATE users SET email = "sylvie+new@dylan.com" WHERE email = "sylvie@dylan.com";  -- Update email
UPDATE users SET name = "Jannis" WHERE email = "jeanne@dylan.com";  -- Update name (should not affect valid_email)

-- Show users after update
SELECT "--";
SELECT * FROM users;

-- Update email with no change, should not reset valid_email
UPDATE users SET email = "bob@dylan.com" WHERE email = "bob@dylan.com";  -- Same email, no change

-- Show users after second update
SELECT "--";
SELECT * FROM users;
