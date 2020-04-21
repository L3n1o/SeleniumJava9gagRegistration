package Registration9gag.StepsFiles;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.WebDriver;

import Registration9gag.Pages.RegistrationPage;
import Registration9gag.DriverSetUp.DriverSetUp;

import cucumber.api.java.After;
//import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Register extends DriverSetUp{
	WebDriver driver;
	RegistrationPage registrationPage;
	DriverSetUp driverSetUp = new DriverSetUp();
	
	@Before
	public void readBrowser()
	{
		driver = driverSetUp.driverSetUp(driver); 
		registrationPage = new RegistrationPage(driver); 
	}
	
	
	@Given("^User navigates to 9gag registration website$")
	public void user_navigates_to_website()
	{
		registrationPage.getPage();
	}
	
	@And("^User closes the pop up message$")
	public void user_closes_the_pop_up_message() 
	{
		registrationPage.closePopUp();
	}

	@And("^User clicks on the Email button$")
	public void user_clicks_on_the_Email_button_on_popup_window()
	{
		registrationPage.clickEmailButton();
	}

	@And("^User enters a full name: ([^\\\"]*)$")
	public void user_enters_a_full_name(String full_name)
	{
		registrationPage.putFullName(full_name);
	}
	
	@And("^User enters an email: ([^\\\"]*)$")
	public void user_enters_an_email(String email)
	{
		registrationPage.putEmail(email);
	}
	
	@And("^User enters a password: ([^\\\"]*)$")
	public void user_enters_a_password(String password)
	{
		registrationPage.putPassword(password);
	}

	@And("^User clicks on the Sign up button$")
	public void user_clicks_on_the_Sign_up_button()
	{
		registrationPage.clickSignUp();
	}

	@And("^User enters an age: ([^\\\"]*)$")
	public void user_enters_an_age(String age) 
	{
		registrationPage.putAge(age);
	}

	//THIS STEP WILL PASS EVEN IF IT'S NOT WORKING, BECAUSE OF CAPTCHA 
	//WHILE EXECUTING TEST YOU HAVE 5 SECONDS TO FILL CAPTCHA AFTER TEST PUTS AGE IN FORM
	@And("^User checks I'm not a robot checkbox$")
	public void user_checks_I_m_not_a_robot_checkbox()
	{
		registrationPage.checkImNotARobot();
	}
	
	@When("^User again clicks on the Sign up button$")
	public void user_again_clicks_on_the_Sign_up_button()
	{
		registrationPage.clickSignUp();
	}
	
	@Then("^User should be taken to registration page with information about invalid input data$")
	public void user_should_be_taken_to_unsuccessful_login_page() {	

		assertEquals(true, registrationPage.unsuccessfulPage());
	}

	@Then("^User should be taken to main page with information about email verification and be logged in$")
	public void user_should_be_taken_to_main_page_with_information_about_email_verification_and_be_logged_in()
	{
		assertEquals(true, registrationPage.successfulPage());
	}

	@After
	public void TearDown()
	{
	    if (driver != null)
	    {
	    	driver.manage().deleteAllCookies();
	    	driver.quit();
	    }
	        
	}
}
