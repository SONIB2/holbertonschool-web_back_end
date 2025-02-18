-- Step 1: Select the data and rank countries by the number of fans
SELECT origin, nb_fans
FROM metal_bands
ORDER BY nb_fans DESC;
