s (5 sloc) 107 Bytes
CREATE DATABASE register;

CREATE TABLE employees(
                          employee_id SERIAL PRIMARY KEY,
                          name VARCHAR(50)
);