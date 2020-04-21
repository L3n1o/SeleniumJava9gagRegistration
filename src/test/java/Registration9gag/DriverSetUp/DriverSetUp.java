package Registration9gag.DriverSetUp;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class DriverSetUp {
	
	JSONParser jsonParser = new JSONParser();
	BufferedReader reader;
	//String username, password;
	
	public WebDriver driverSetUp(WebDriver driver)
	{	
        try
        {
        	Object obj = jsonParser.parse(new FileReader("src\\test\\java\\Login9gag\\Resources\\browser.json"));
        	JSONObject jsonObject = (JSONObject) obj;
        	driver = setBrowser(driver, (String) jsonObject.get("browser"));
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
			reader = new BufferedReader(new FileReader("\src\\test\\java\\CucumberTest\\Resources\\browser.txt"));
			driver = driverSetUp(reader.readLine());
		}
		catch(IOException ex)
		{
			ex.printStackTrace();
		}
	}*/
	
	/*
	public void readUserData()
	{	
		driver = driverSetUp("");
        try
        {
        	Object obj = jsonParser.parse(new FileReader("src\\test\\java\\Login9gag\\Resources\\loginData.json"));
        	JSONObject jsonObject = (JSONObject) obj;
 
			username = (String) jsonObject.get("username");
			password = (String) jsonObject.get("password"); 
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }}
    //Text file reader
		try {
			reader = new BufferedReader(new FileReader("src\\test\\java\\Login9gag\\Resources\\loginData.txt"));
			username = reader.readLine();
			password = reader.readLine();
			System.out.println(username + " " + password);
		}
		catch(IOException ex)
		{
			ex.printStackTrace();
		}
	}*/
	
	public WebDriver setBrowser(WebDriver driver, String browser)
	{
		if (driver == null) {
			switch(browser)
			{
			case "chrome":
				driver = new ChromeDriver();
				break;
			case "firefox":
				System.setProperty("webdriver.gecko.driver","src\\test\\java\\Login9gag\\Resources\\geckodriver.exe");
				DesiredCapabilities firefoxOptions = DesiredCapabilities.firefox();
				firefoxOptions.setCapability("marionette", true);
				driver = new FirefoxDriver(firefoxOptions);
				break;
			}	
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().setScriptTimeout(5, TimeUnit.SECONDS);
		return driver;
	}
}
