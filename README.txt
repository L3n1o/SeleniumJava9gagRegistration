This is simple test of registration feature on 9gag.com

To run this test you can:

1) open it in Eclipse and then run /Registration9gag/src/test/java/Registration9gag/Runner/MainRunner.java as JUnit test
2)???

Test is checking couple of basic configuration of invalid data and one for valid full name, email, password and age. Before running test with valid data, please fill columns in second table in /Registration9gag/src/test/java/Registration9gag/FeatureFiles/Login.feature with valid full name, email, password and age.
-full name can be 1 char, 
-email as user_name@server_name, 
-password with length>5 characters that are alphanumerics,
-age>15

!!!WARNING!!!
TEST WITH VALID DATA WILL FAIL, BECAUSE OF CAPTCHA!!!
WHILE EXECUTING TEST YOU HAVE 5 SECONDS(Thread.sleep(5000) in public void user_checks_I_m_not_a_robot_checkbox()) TO FILL CAPTCHA AFTER TEST PUTS AGE IN FORM! TO INCREASE THIS TIME: INCREASE VALUE IN Thread.sleep() METHOD (IN MILISECONDS, 1000 == 1 SECOND).
