-- Create the table if it does not already exist
CREATE TABLE IF NOT EXISTS metal_bands (
    origin VARCHAR(255) NOT NULL,
    nb_fans INT NOT NULL
);

-- Insert data into the table (you can also import the dump here if it’s a separate file)
-- Example: Insert some data (adjust this based on actual data or import method)
-- INSERT INTO metal_bands (origin, nb_fans) VALUES ('USA', 99349), ('Sweden', 47169), ... ;

-- Rank countries by the number of fans, ordered by nb_fans in descending order
SELECT origin, nb_fans
FROM metal_bands
ORDER BY nb_fans DESC;
