-- Step 1: Select the data and rank countries by the number of bands
SELECT band_name and lifespan
FROM metal_bands
ORDER BY nb_fans DESC;
