-- Crear el esquema
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8;
USE `mydb`;

-- Crear la tabla Genre
CREATE TABLE IF NOT EXISTS `mydb`.`genre` (
  `idgenre` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `genrecol` VARCHAR(255) NULL,
  PRIMARY KEY (`idgenre`)
) ENGINE = InnoDB;

-- Crear la tabla Artist
CREATE TABLE IF NOT EXISTS `mydb`.`artist` (
  `idartist` INT UNSIGNED AUTO_INCREMENT,
  `artistcol` VARCHAR(255) NULL,
  PRIMARY KEY (`idartist`)
) ENGINE = InnoDB;

-- Crear la tabla Album
CREATE TABLE IF NOT EXISTS `mydb`.`Album` (
  `idAlbum` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Albumcol` VARCHAR(255) NULL,
  `date` DATETIME NULL,
  `genre_idgenre` INT UNSIGNED NOT NULL,
  `artist_idartist` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idAlbum`),
  INDEX `fk_Album_genre_idx` (`genre_idgenre` ASC) VISIBLE,
  INDEX `fk_Album_artist1_idx` (`artist_idartist` ASC) VISIBLE,
  CONSTRAINT `fk_Album_genre`
    FOREIGN KEY (`genre_idgenre`)
    REFERENCES `mydb`.`genre` (`idgenre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Album_artist1`
    FOREIGN KEY (`artist_idartist`)
    REFERENCES `mydb`.`artist` (`idartist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;
