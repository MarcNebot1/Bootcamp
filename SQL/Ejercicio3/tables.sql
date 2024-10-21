-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ejercicio3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ejercicio3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ejercicio3` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema ejercicio3
-- -----------------------------------------------------
USE `ejercicio3` ;

-- -----------------------------------------------------
-- Table `ejercicio3`.`country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio3`.`country` (
  `idcountry` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(50) NULL,
  `last_update` TIMESTAMP NULL,
  PRIMARY KEY (`idcountry`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ejercicio3`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio3`.`city` (
  `idcity` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(50) NULL,
  `last_update` TIMESTAMP NULL,
  `country_idcountry` SMALLINT UNSIGNED NOT NULL,
  PRIMARY KEY (`idcity`),
  INDEX `fk_city_country1_idx` (`country_idcountry` ASC) VISIBLE,
  CONSTRAINT `fk_city_country1`
    FOREIGN KEY (`country_idcountry`)
    REFERENCES `ejercicio3`.`country` (`idcountry`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio3`.`address` (
  `idaddress` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(50) NULL,
  `address1` VARCHAR(50) NULL,
  `district` VARCHAR(20) NULL,
  `postal_code` VARCHAR(10) NULL,
  `phone` VARCHAR(20) NULL,
  `location` VARCHAR(20) NULL,
  `lastupdate` TIMESTAMP NULL,
  `city_idcity` SMALLINT UNSIGNED NOT NULL,
  PRIMARY KEY (`idaddress`),
  INDEX `fk_address_city_idx` (`city_idcity` ASC) VISIBLE,
  CONSTRAINT `fk_address_city`
    FOREIGN KEY (`city_idcity`)
    REFERENCES `ejercicio3`.`city` (`idcity`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


INSERT INTO address (address, address1, district, postal_code, phone, location, lastupdate, city_idcity) 
VALUES  
('a', 'b', 'c', 'd', 'e', 'rr', NOW(), 1), 
('aa', 'bb', 'cc', 'dd', 'ee', 'rrr', NOW(), 2), 
('aaa', 'bbb', 'ccc', 'ddd', 'eee', 'rrrr', NOW(), 3), 
('aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'rrrrr', NOW(), 4), 
('aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'rrrrrr', NOW(), 5);

-- Insertar datos en la tabla 
INSERT INTO city (city,last_update,country_idcountry) VALUES
('sssssss', NOW(),1),
('aaaaaa', NOW(),2),
('vvvvvv', NOW(),3),
('eeeeee', NOW(),4),
('jjjjjjj', NOW(),5);

-- Insertar datos en la tabla 
INSERT INTO country (country,last_update) VALUES
('spain', NOW()),  
('italy', NOW()),
('grecia', NOW()),
('france', NOW()),
('uk', NOW());
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
