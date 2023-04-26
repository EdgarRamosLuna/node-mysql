CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);
 
INSERT INTO tasks (title, description) VALUES 
    ('Task 1', 'Description 1'),
    ('Task 2', 'Description 2');
-- ENGINE=InnoDB DEFAULT CHARSET=utf8;