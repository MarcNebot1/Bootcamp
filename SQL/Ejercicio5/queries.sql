-- query 1
SELECT 
a.nombre
FROM 
alumnos a
JOIN 
alumnos_has_curso al ON a.idalumnos= al.alumnos_idalumnos
JOIN
curso c ON al.curso_idcurso = c.idcurso
JOIN 
profesor p ON c.profesor_idprofesor = p.idprofesor
WHERE 
    p.nombre = 'Dr. Alberto Torres';
    
-- query 2
SELECT *
FROM curso c
JOIN profesor p ON c.profesor_idprofesor=p.idprofesor
WHERE
p.nombre = 'Dr. Alberto Torres';

-- query 3
SELECT *
FROM
curso c
JOIN 
alumnos_has_curso al ON c.idcurso= al.curso_idcurso
JOIN 
alumnos a ON a.idalumnos= al.alumnos_idalumnos
WHERE
a.nombre = 'Juan Pérez';
