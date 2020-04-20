package Registration9gag.Pages;

import Registration9gag.DriverSetUp.DriverSetUp;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class RegistrationPage {
	JSONParser jsonParser = new JSONParser();
	BufferedReader reader;
	DriverSetUp driverSetUp = new DriverSetUp();
	//String username, password;
	
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
	public WebDriver readBrowser(WebDriver driver)
	{	
        try
        {
        	Object obj = jsonParser.parse(new FileReader("src\\test\\java\\Registration9gag\\Resources\\browser.json"));
        	JSONObject jsonObject = (JSONObject) obj;
        	driver = driverSetUp.driverSetUp(driver, (String) jsonObject.get("browser"));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return driver;
	}
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
	
	public void getPage(WebDriver driver)
	{
		driver.get("https://9gag.com/signup");
	}
	
	public void closePopUp(WebDriver driver)
	{
		try {
			WebDriverWait wait = new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("popup_content--2JBXA")));
			driver.findElement(By.xpath("/html/body/div[7]/div[1]/div[2]/div/div[3]/button[2]")).click();
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}
	
	public void clickEmailButton(WebDriver driver)
	{
		try {
			driver.findElement(By.xpath("//*[@id=\"signup-fb\"]/p[2]/a")).click();
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putFullName(WebDriver driver, String full_name)
	{
		try {
			driver.findElement(By.id("signup-email-name")).clear();
			driver.findElement(By.id("signup-email-name")).sendKeys(full_name);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putEmail(WebDriver driver, String email)
	{
		try {
			driver.findElement(By.id("signup-email-email")).clear();
			driver.findElement(By.id("signup-email-email")).sendKeys(email);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putPassword(WebDriver driver, String password)
	{
		try {
			driver.findElement(By.id("signup-email-password")).clear();
			driver.findElement(By.id("signup-email-password")).sendKeys(password);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void clickSignUp(WebDriver driver)
	{
		try {
			driver.findElement(By.xpath("//*[@id=\"signup-email\"]/form/div[4]/a")).click();
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void putAge(WebDriver driver, String age)
	{
		try {
			driver.findElement(By.id("signup-email-age")).clear();
			driver.findElement(By.id("signup-email-age")).sendKeys(age);
		} catch (NoSuchElementException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void checkImNotARobot(WebDriver driver)
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
	
	public boolean successfulPage(WebDriver driver)
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
	
	public boolean unsuccessfulPage(WebDriver driver)
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
