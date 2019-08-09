CREATE DATABASE hotrestaurant;
USE hotrestaurant;
CREATE TABLE reservation (ID VARCHAR(100), uName VARCHAR(100), phone VARCHAR(100), email VARCHAR(100), waitlist bool);

INSERT INTO reservation (ID, uName, phone, email, waitlist)
	VALUES ('1', 'Bob', '5555555555', 'email@email.com', false);