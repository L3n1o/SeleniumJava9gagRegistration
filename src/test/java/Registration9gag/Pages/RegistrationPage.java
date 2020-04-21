package Registration9gag.Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RegistrationPage {
	private WebDriver driver;
	
	public RegistrationPage(WebDriver driver)
	{
		this.driver = driver;
	}
	
	public void getPage()
	{
		driver.get("https://9gag.com/signup");
	}
	
	public void closePopUp()
	{
		try {
			WebDriverWait wait = new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("popup_content--2JBXA")));
			driver.findElement(By.xpath("/html/body/div[7]/div[1]/div[2]/div/div[3]/button[2]")).click();
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}
	
	public void clickEmailButton()
	{
		try {
			driver.findElement(By.xpath("//*[@id=\"signup-fb\"]/p[2]/a")).click();
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putFullName(String full_name)
	{
		try {
			driver.findElement(By.id("signup-email-name")).clear();
			driver.findElement(By.id("signup-email-name")).sendKeys(full_name);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putEmail(String email)
	{
		try {
			driver.findElement(By.id("signup-email-email")).clear();
			driver.findElement(By.id("signup-email-email")).sendKeys(email);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putPassword(String password)
	{
		try {
			driver.findElement(By.id("signup-email-password")).clear();
			driver.findElement(By.id("signup-email-password")).sendKeys(password);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void clickSignUp()
	{
		try {
			driver.findElement(By.xpath("//*[@id=\"signup-email\"]/form/div[4]/a")).click();
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putAge(String age)
	{
		try {
			driver.findElement(By.id("signup-email-age")).clear();
			driver.findElement(By.id("signup-email-age")).sendKeys(age);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void checkImNotARobot()
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
	
	public boolean successfulPage()
	{
		try {
			if(driver.findElement(By.id("jsid-banner-confirm-email")).isDisplayed())
				return true;
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;		
	}
	
	public boolean unsuccessfulPage()
	{
		try {
			if(driver.findElement(By.xpath("//*[@id=\"signup-email\"]/form/div[3]/p")).isDisplayed())
				return true;
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;		
	}
}
