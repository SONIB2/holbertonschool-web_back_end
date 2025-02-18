-- Display initial data
SELECT * FROM users;

-- Updating valid_email manually (should NOT reset valid_email)
UPDATE users SET valid_email = 1 WHERE email = "bob@dylan.com";

-- Changing email (should reset valid_email to 0)
UPDATE users SET email = "sylvie+new@dylan.com" WHERE email = "sylvie@dylan.com";

-- Changing only the name (should NOT reset valid_email)
UPDATE users SET name = "Jannis" WHERE email = "jeanne@dylan.com";

-- Display results
SELECT "--";
SELECT * FROM users;

-- Updating email to the same value (should NOT reset valid_email)
UPDATE users SET email = "bob@dylan.com" WHERE email = "bob@dylan.com";

-- Display final results
SELECT "--";
SELECT * FROM users;
