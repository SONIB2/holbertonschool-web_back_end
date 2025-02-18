-- Show existing projects and corrections
SELECT * FROM projects;
SELECT * FROM corrections;

SELECT "--";

-- Call AddBonus to add new scores
CALL AddBonus((SELECT id FROM users WHERE name = "Jeanne"), "Python is cool", 100);
CALL AddBonus((SELECT id FROM users WHERE name = "Jeanne"), "Bonus project", 100);
CALL AddBonus((SELECT id FROM users WHERE name = "Bob"), "Bonus project", 10);
CALL AddBonus((SELECT id FROM users WHERE name = "Jeanne"), "New bonus", 90);

SELECT "--";

-- Show updated projects and corrections
SELECT * FROM projects;
SELECT * FROM corrections;
