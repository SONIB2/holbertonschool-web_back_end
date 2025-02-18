-- Use the correct database
USE holberton;

-- Import the table data from the metal_bands.sql file
SOURCE metal_bands.sql;

-- Now, let's rank countries based on the number of fans in descending order
SELECT origin, fans_count  -- Use the actual column name here
FROM metal_bands
ORDER BY fans_count DESC;  -- Use the actual column name here
