-- Show initial data
SELECT * FROM projects;
SELECT * FROM corrections;

-- Add bonus corrections
CALL AddBonus((SELECT id FROM users WHERE name = "Jeanne"), "Python is cool", 100);
CALL AddBonus((SELECT id FROM users WHERE name = "Jeanne"), "Bonus project", 100);
CALL AddBonus((SELECT id FROM users WHERE name = "Bob"), "Bonus project", 10);
CALL AddBonus((SELECT id FROM users WHERE name = "Jeanne"), "New bonus", 90);

-- Show updated data
SELECT * FROM projects;
SELECT * FROM corrections;
