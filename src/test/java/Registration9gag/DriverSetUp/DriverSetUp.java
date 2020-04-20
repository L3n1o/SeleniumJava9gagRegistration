package Registration9gag.DriverSetUp;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class DriverSetUp {
	
	public WebDriver driverSetUp(WebDriver driver, String browser)
	{
		if (driver == null) {
			switch(browser)
			{
			case "chrome":
				driver = setUpChrome(driver);
				break;
			case "firefox":
				driver = setUpFirefox(driver);
				break;
			}	
		}
		return driver;
	}
	
	private WebDriver setUpChrome(WebDriver driver)
	{
		//System.setProperty("webdriver.chrome.driver","src\\test\\java\\Login9gag\\Resources\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().setScriptTimeout(5, TimeUnit.SECONDS);
		
		return driver;
    }
	
	private WebDriver setUpFirefox(WebDriver driver)
	{
		System.setProperty("webdriver.gecko.driver","src\\test\\java\\Login9gag\\Resources\\geckodriver.exe");
		DesiredCapabilities firefoxOptions = DesiredCapabilities.firefox();
		firefoxOptions.setCapability("marionette", true);
		driver = new FirefoxDriver(firefoxOptions);
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().setScriptTimeout(5, TimeUnit.SECONDS);	
		
		return driver;
	}
}
