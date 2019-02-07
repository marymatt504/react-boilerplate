DROP DATABASE IF EXISTS best_restaurants;

CREATE DATABASE best_restaurants;

USE best_restaurants;

CREATE TABLE restaurants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(32) UNIQUE NOT NULL,
  neighborhood VARCHAR(32) NOT NULL,
  url VARCHAR(300) NOT NULL,
  averageDishPrice FLOAT NOT NULL
);