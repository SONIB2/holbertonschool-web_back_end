-- Show initial state of users table
SELECT * FROM users;

-- Update valid_email without changing email (should not reset valid_email)
UPDATE users SET valid_email = 1 WHERE email = "bob@dylan.com";

-- Change email (should reset valid_email to 0)
UPDATE users SET email = "sylvie+new@dylan.com" WHERE email = "sylvie@dylan.com";

-- Update only the name (should not reset valid_email)
UPDATE users SET name = "Jannis" WHERE email = "jeanne@dylan.com";

SELECT "--";
SELECT * FROM users;

-- Try updating email with the same value (should not reset valid_email)
UPDATE users SET email = "bob@dylan.com" WHERE email = "bob@dylan.com";

SELECT "--";
SELECT * FROM users;
