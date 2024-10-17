INSERT INTO Genre (genrecol) VALUES 
('punk'),
('rock'),
('pop'),
('rap'),
('heavymetal');

-- Insertar datos en la tabla 
INSERT INTO Artist (artistcol) VALUES
('fito y fitipaldis'),
('esto es estopa'),
('michael jackson'),
('red hot'),
('melendi');

-- Insertar datos en la tabla 
INSERT INTO Album (Albumcol, date, genre_idgenre, artist_idartist) VALUES
('azul', '2023-01-01', 1, 1),  
('esto es estopa', '2023-01-02', 2, 1),
('thriller', '1982-11-30', 3, 1),
('californication', '1999-06-08', 4, 1),
('utopia', '2020-05-01', 5, 1);