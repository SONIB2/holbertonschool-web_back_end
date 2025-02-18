-- 3-glam_rock.sql
SELECT band_name,
       YEAR(split) - YEAR(formed) AS lifespan
FROM metal_bands
WHERE style = 'Glam rock'
AND split IS NOT NULL 
ORDER BY lifespan DESC;
