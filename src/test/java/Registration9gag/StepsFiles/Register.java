package Registration9gag.StepsFiles;

import static org.testng.Assert.assertEquals;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
//import java.util.concurrent.TimeUnit;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

//import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Register extends DriverSetUp{
	WebDriver driver;
	WebElement popUp;
	BufferedReader reader;
	//String full_name, email, password, age;
	boolean finish = false;
	JSONParser jsonParser = new JSONParser();
	
	/* Read user data from file
	public void readUserData()
	{	
		driver = driverSetUp("");
        try
        {
        	Object obj = jsonParser.parse(new FileReader("src\\test\\java\\Registration9gag\\Resources\\registerData.json"));
        	JSONObject jsonObject = (JSONObject) obj;
 
 			full_name = (String) jsonObject.get("full_name");
			email = (String) jsonObject.get("email");
			password = (String) jsonObject.get("password"); 
			age = (String) jsonObject.get("age")
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }}
    //Text file reader
		try {
			reader = new BufferedReader(new FileReader("src\\test\\java\\Registration9gag\\Resources\\loginData.txt"));
			username = reader.readLine();
			password = reader.readLine();
			System.out.println(username + " " + password);
		}
		catch(IOException ex)
		{
			ex.printStackTrace();
		}
	}*/
	
	@Before
	public void readBrowser()
	{	
        try
        {
        	Object obj = jsonParser.parse(new FileReader("src\\test\\java\\Registration9gag\\Resources\\browser.json"));
        	JSONObject jsonObject = (JSONObject) obj;
        	driver = driverSetUp((String) jsonObject.get("browser"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }}
       /*//Text file reader
		try {
			reader = new BufferedReader(new FileReader("\src\\test\\java\\Registration9gag\\Resources\\browser.txt"));
			driver = driverSetUp(reader.readLine());
		}
		catch(IOException ex)
		{
			ex.printStackTrace();
		}
	}*/
	
	@Given("^User navigates to 9gag registration website$")
	public void user_navigates_to_website()
	{
		driver.get("https://9gag.com/signup");
	}
	
	@And("^User closes the pop up message$")
	public void user_closes_the_pop_up_message() 
	{
		try {
			Thread.sleep(2000);
			popUp = driver.findElement(By.className("popup_content--2JBXA"));
			if(popUp.isDisplayed())
			{
				driver.findElement(By.xpath("/html/body/div[7]/div[1]/div[2]/div/div[3]/button[2]")).click();
			}
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@And("^User clicks on the Email button$")
	public void user_clicks_on_the_Email_button_on_popup_window()
	{
		try {
			driver.findElement(By.xpath("//*[@id=\"signup-fb\"]/p[2]/a")).click();
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@And("^User enters a full name: ([^\\\"]*)$")
	public void user_enters_a_full_name(String full_name)
	{
		try {
			driver.findElement(By.id("signup-email-name")).clear();
			driver.findElement(By.id("signup-email-name")).sendKeys(full_name);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@And("^User enters an email: ([^\\\"]*)$")
	public void user_enters_an_email(String email)
	{
		try {
			driver.findElement(By.id("signup-email-email")).clear();
			driver.findElement(By.id("signup-email-email")).sendKeys(email);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@And("^User enters a password: ([^\\\"]*)$")
	public void user_enters_a_password(String password)
	{
		try {
			driver.findElement(By.id("signup-email-password")).clear();
			driver.findElement(By.id("signup-email-password")).sendKeys(password);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@And("^User clicks on the Sign up button$")
	public void user_clicks_on_the_Sign_up_button()
	{
		try {
			driver.findElement(By.xpath("//*[@id=\"signup-email\"]/form/div[4]/a")).click();
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@And("^User enters an age: ([^\\\"]*)$")
	public void user_enters_an_age(String age) 
	{
		try {
			driver.findElement(By.id("signup-email-age")).clear();
			driver.findElement(By.id("signup-email-age")).sendKeys(age);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	//THIS STEP WILL PASS EVEN IF IT'S NOT WORKING, BECAUSE OF CAPTCHA 
	//WHILE EXECUTING TEST YOU HAVE 5 SECONDS TO FILL CAPTCHA AFTER TEST PUTS AGE IN FORM
	@And("^User checks I'm not a robot checkbox$")
	public void user_checks_I_m_not_a_robot_checkbox()
	{
		try {
			driver.findElement(By.xpath("//*[@id=\"recaptcha-anchor\"]/div[1]")).click();
			Thread.sleep(5000);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@When("^User again clicks on the Sign up button$")
	public void user_again_clicks_on_the_Sign_up_button()
	{
		user_clicks_on_the_Sign_up_button();
	}
	
	@Then("^User should be taken to registration page with information about invalid input data$")
	public void user_should_be_taken_to_unsuccessful_login_page() {	
		try {
			if(driver.findElement(By.xpath("//*[@id=\"signup-email\"]/form/div[3]/p")).isDisplayed())
				finish = true;
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		assertEquals(true, finish);
	}

	@Then("^User should be taken to main page with information about email verification and be logged in$")
	public void user_should_be_taken_to_main_page_with_information_about_email_verification_and_be_logged_in()
	{
		try {
			if(driver.findElement(By.id("jsid-banner-confirm-email")).isDisplayed())
				finish = true;
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		assertEquals(true, finish);
	}
	/*
	@After
	public void TearDown()
	{
	    if (driver != null)
	    {
	    	driver.manage().deleteAllCookies();
	    	driver.quit();
	    }
	        
	}*/
}
