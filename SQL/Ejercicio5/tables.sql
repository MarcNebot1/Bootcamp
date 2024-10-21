-- MySQL Workbench Forward Engineering
DROP TABLE IF EXISTS alumnos_has_curso;
DROP TABLE IF EXISTS alumnos;
DROP TABLE IF EXISTS curso;
DROP TABLE IF EXISTS profesor;

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ejercicio5` DEFAULT CHARACTER SET utf8 ;
USE `ejercicio5` ;

-- -----------------------------------------------------
-- Table `ejercicio5`.`alumnos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio5`.`alumnos` (
  `idalumnos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idalumnos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ejercicio5`.`profesor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio5`.`profesor` (
  `idprofesor` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`idprofesor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ejercicio5`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio5`.`curso` (
  `idcurso` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `profesor_idprofesor` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idcurso`),
  INDEX `fk_curso_profesor1_idx` (`profesor_idprofesor` ASC) VISIBLE,
  CONSTRAINT `fk_curso_profesor1`
    FOREIGN KEY (`profesor_idprofesor`)
    REFERENCES `ejercicio5`.`profesor` (`idprofesor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ejercicio5`.`alumnos_has_curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio5`.`alumnos_has_curso` (
  `alumnos_idalumnos` INT NOT NULL,
  `curso_idcurso` INT NOT NULL,
  `nota` DECIMAL NULL,
  `notaid` INT NOT NULL,
  PRIMARY KEY (`alumnos_idalumnos`, `curso_idcurso`, `notaid`),
  INDEX `fk_alumnos_has_curso_curso1_idx` (`curso_idcurso` ASC) VISIBLE,
  INDEX `fk_alumnos_has_curso_alumnos_idx` (`alumnos_idalumnos` ASC) VISIBLE,
  CONSTRAINT `fk_alumnos_has_curso_alumnos`
    FOREIGN KEY (`alumnos_idalumnos`)
    REFERENCES `ejercicio5`.`alumnos` (`idalumnos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_alumnos_has_curso_curso1`
    FOREIGN KEY (`curso_idcurso`)
    REFERENCES `ejercicio5`.`curso` (`idcurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `ejercicio5`.`alumnos` (nombre) VALUES
('Juan Pérez'),
('María García'),
('Luis Martínez'),
('Ana López'),
('Carlos Sánchez'),
('Laura Fernández'),
('José Rodríguez'),
('Elena Jiménez'),
('David Gómez'),
('Clara Ruiz');

-- Insertar 10 profesores
INSERT INTO `ejercicio5`.`profesor` (nombre) VALUES
('Dr. Alberto Torres'),
('Prof. Carla Díaz'),
('Dr. Juan Castillo'),
('Prof. Laura Méndez'),
('Dr. Carlos Romero'),
('Prof. Ana Beltrán'),
('Dr. Manuel Ortega'),
('Prof. María Pacheco'),
('Dr. Roberto Silva'),
('Prof. Elena Castro');

-- Insertar 10 cursos (asumiendo que hay un profesor asociado a cada curso)
INSERT INTO `ejercicio5`.`curso` (nombre, profesor_idprofesor) VALUES
('Matemáticas', 1),
('Ciencias', 1),
('Historia', 3),
('Literatura', 4),
('Química', 5),
('Física', 6),
('Biología', 7),
('Geografía', 8),
('Arte', 9),
('Música', 10);

-- Insertar registros en alumnos_has_curso
-- Suponiendo que cada alumno tiene una nota en cada curso
INSERT INTO `ejercicio5`.`alumnos_has_curso` (alumnos_idalumnos, curso_idcurso, nota, notaid) VALUES
(1, 1, 85.0, 1),
(1, 2, 90.5, 2),
(1, 3, 78.0, 3),
(2, 1, 92.0, 4),
(2, 2, 88.5, 5),
(3, 3, 80.0, 6),
(4, 4, 95.0, 7),
(5, 5, 89.0, 8),
(6, 6, 75.0, 9),
(7, 7, 82.0, 10),
(8, 8, 91.0, 11),
(9, 9, 70.0, 12),
(10, 10, 88.0, 13);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
