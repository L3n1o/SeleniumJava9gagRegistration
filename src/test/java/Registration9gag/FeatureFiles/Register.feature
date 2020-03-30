Feature: Register new account on 9gag
		 User should be able to create new account by using correct data:
		 (	full name, 
		 	email as user_name@server_name, 
		 	password with length>5 characters that are alphanumerics,
		 	age>15
		 )
		 


Scenario Outline: Register new account with incorrect data
	
	Given 	User navigates to 9gag registration website
	And 	User closes the pop up message
	And 	User clicks on the Email button
	And 	User enters a full name: <full name>
	And 	User enters an email: <email>
	And 	User enters a password: <password> 
	And 	User clicks on the Sign up button
	And 	User enters an age: <age>
	And 	User checks I'm not a robot checkbox
	When 	User again clicks on the Sign up button
	Then 	User should be taken to registration page with information about invalid input data
	
Examples:
|full name			|email					|password	|age	|
|					|example@gmail.com		|Example12@	|22 	|
|XXX YYY			|		@gmail.com		|Example12@	|22 	|
|XXX YYY			|example				|Example12@	|22 	|
|					|examplegmail.com		|Example12@	|22 	|
|XXX YYY			|example@gmail.com		|			|22 	|
|XXX YYY			|example@gmail.com		|Example12$	|22 	|
|XXX YYY			|example@gmail.com		|Examp		|22 	|
|XXX YYY			|example@gmail.com		|Example12@	|		|
|XXX YYY			|example@gmail.com		|Example12@	|XY		|
|XXX YYY			|example@gmail.com		|Example12@	|-16	|
|XXX YYY			|example@gmail.com		|Example12@	|15.99	|
|XXX YYY			|example@gmail.com		|Example12@	|15,99	|
|XXX YYY			|example@gmail.com		|Example12@	|15		|

Scenario Outline: Register new account with incorrect data
	
	Given 	User navigates to 9gag registration website
	And 	User closes the pop up message
	And 	User clicks on the Email button
	And 	User enters a full name: <full name>
	And 	User enters an email: <email>
	And 	User enters a password: <password> 
	And 	User clicks on the Sign up button
	And 	User enters an age: <age>
	And 	User checks I'm not a robot checkbox
	When 	User again clicks on the Sign up button
	Then 	User should be taken to registration page with information about invalid input data
	
Examples:
|full name			|email				|password	|age|
|XXX YYY			|example@gmail.com	|Example12@	|16 |
