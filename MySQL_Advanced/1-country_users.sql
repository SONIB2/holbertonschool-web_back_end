-- Ensure the database is selected
USE holberton;

-- Call the script to create the table and populate it with data (you can also directly import this from the dump file)
SOURCE 2-fans.sql;

-- Now we run the query to rank the countries based on the number of fans
SELECT origin, nb_fans
FROM metal_bands
ORDER BY nb_fans DESC;
