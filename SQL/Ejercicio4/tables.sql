DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS salesman;
CREATE SCHEMA IF NOT EXISTS `ejercicio4` DEFAULT CHARACTER SET utf8 ;
USE `ejercicio4` ;

CREATE TABLE IF NOT EXISTS `ejercicio4`.`customer` (
  `idcustomer` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `custom_name` VARCHAR(30) NOT NULL,
   `city` VARCHAR(30) NOT NULL,
   `grade` INT NOT NULL,
  PRIMARY KEY (`idcustomer`));

CREATE TABLE IF NOT EXISTS `ejercicio4`.`orders` (
  `idorder` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `PURCH_AMT` DECIMAL(8.2) NOT NULL,
  `ord_date` DATE,
  `customer_idcustomer` INT UNSIGNED NOT NULL,
  `salesman_idsalesman` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idorder`),
   FOREIGN KEY (`salesman_idsalesman`)
    REFERENCES `ejercicio4`.`salesman` (`idsalesman`),
   FOREIGN KEY (`customer_idcustomer`)
    REFERENCES `ejercicio4`.`customer` (`idcustomer`));

CREATE TABLE IF NOT EXISTS `ejercicio4`.`salesman` (
  `idsalesman` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `salesman_name` VARCHAR(30) NOT NULL,
   `city` VARCHAR(30) NOT NULL,
   `comission` DECIMAL (5.2),
  PRIMARY KEY (`idsalesman`));
  
  INSERT INTO ejercicio4.customer (custom_name, city, grade) 
VALUES 
('John Doe', 'New York', 1),
('Jane Smith', 'Los Angeles', 2),
('Michael Brown', 'Chicago', 3),
('Laura Johnson', 'Houston', 2),
('David Wilson', 'Phoenix', 1),
('Emily Davis', 'Philadelphia', 3),
('Daniel Garcia', 'San Antonio', 2),
('Sophia Martinez', 'San Diego', 1),
('Matthew Lee', 'Dallas', 2),
('John Doe', 'San Jose', 3);

INSERT INTO ejercicio4.salesman (salesman_name, city, comission) 
VALUES 
('Mark Robinson', 'New York', 15.50),
('Lucas King', 'Los Angeles', 12.30),
('James Baker', 'Chicago', 10.00),
('Emma Harris', 'Houston', 8.75),
('Alexander Clark', 'Phoenix', 14.50),
('Lily Lewis', 'Philadelphia', 9.20),
('Benjamin Walker', 'San Antonio', 11.85),
('Charlotte Young', 'San Diego', 13.75),
('Henry Hall', 'Dallas', 7.65),
('Amelia Allen', 'San Jose', 16.25);

INSERT INTO ejercicio4.orders (PURCH_AMT, ord_date, customer_idcustomer, salesman_idsalesman) 
VALUES 
(250.75, '2024-01-15', 1, 1),
(320.60, '2024-02-18', 2, 1),
(150.00, '2024-03-05', 3, 3),
(500.40, '2024-01-30', 4, 4),
(275.25, '2024-02-22', 5, 5),
(310.90, '2024-03-12', 6, 6),
(440.80, '2024-01-25', 7, 7),
(195.75, '2024-02-14', 8, 8),
(355.50, '2024-03-07', 9, 9),
(220.35, '2024-01-20', 10, 10);
  
  

