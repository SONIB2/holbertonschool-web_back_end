-- Show users table before calling the procedure
SELECT * FROM users;
SELECT * FROM corrections;

-- Compute average score for Jeanne
SELECT "--";
CALL ComputeAverageScoreForUser((SELECT id FROM users WHERE name = "Jeanne"));

-- Show users table after calling the procedure
SELECT "--";
SELECT * FROM users;
