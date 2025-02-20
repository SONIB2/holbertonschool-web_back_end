-- Show and compute average score
SELECT * FROM users;
SELECT * FROM corrections;

SELECT "--";

-- Call procedure to compute the average score for Jeanne (user_id = 2)
CALL ComputeAverageScoreForUser(2);

SELECT "--";
-- Show updated users table with average scores
SELECT * FROM users;
