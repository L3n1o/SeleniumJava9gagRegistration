package Registration9gag.StepsFiles;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class DriverSetUp {
	protected static WebDriver driver;
	
	protected WebDriver driverSetUp(String browser)
	{
		if (driver == null) {
			switch(browser)
			{
			case "chrome":
				setUpChrome();
				break;
			case "firefox":
				setUpFirefox();
				break;
			}	
		}
		return driver;
	}
	
	private void setUpChrome()
	{
		System.setProperty("webdriver.chrome.driver","src\\test\\java\\Registration9gag\\Resources\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().setScriptTimeout(5, TimeUnit.SECONDS);	
    }
	
	private void setUpFirefox()
	{
		System.setProperty("webdriver.gecko.driver","src\\test\\java\\Registration9gag\\Resources\\geckodriver.exe");
		DesiredCapabilities firefoxOptions = DesiredCapabilities.firefox();
		firefoxOptions.setCapability("marionette", true);
		driver = new FirefoxDriver(firefoxOptions);
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().setScriptTimeout(5, TimeUnit.SECONDS);		
	}
}
