-- update managers
UPDATE Employees as e
SET e.roleId = 2
WHERE e.jobTitle IN ('Sales Manager (APAC)', 'Sale Manager (EMEA)', 'Sales Manager (NA)')

-- update leaders
UPDATE Employees m
	INNER JOIN Employees s
	ON m.employeeNumber = s.reportsTo
SET m.roleId = 3
WHERE m.roleId is null

-- update staffs
UPDATE Employees m
SET m.roleId = 4
WHERE m.roleId is null

-- update president
UPDATE Employees m
SET m.roleId = 1
WHERE m.jobTitle = 'President'
