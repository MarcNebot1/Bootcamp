START TRANSACTION;
UPDATE alumnos SET nombre = 'Nuevo Nombre' WHERE idalumnos = 1;
ROLLBACK;

START TRANSACTION;
UPDATE alumnos SET nombre = 'Nuevo nombre' WHERE idalumnos = 3;
COMMIT;