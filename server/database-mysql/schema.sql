DROP DATABASE IF EXISTS food_menu;

CREATE DATABASE food_menu;

USE food_menu;

CREATE TABLE menu (
  id int NOT NULL AUTO_INCREMENT,
  food varchar(45) NOT NULL,
  price varchar(10) NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/