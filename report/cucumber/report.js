$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register new account on 9gag",
  "description": " User should be able to create new account by using correct data",
  "id": "register-new-account-on-9gag",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Register new account with incorrect data",
  "description": "",
  "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to 9gag registration website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the Email button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters a full name: \u003cfull name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters an email: \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters a password: \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User checks I\u0027m not a robot checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on the Sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters an age: \u003cage\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User again clicks on the Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should be taken to registration page with information about invalid input data",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;",
  "rows": [
    {
      "cells": [
        "full name",
        "email",
        "password",
        "age"
      ],
      "line": 19,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;1"
    },
    {
      "cells": [
        "XXX YYY",
        "wasylionsssss@gmail.com",
        "Klenio12@",
        "22"
      ],
      "line": 20,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12828748000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Register new account with incorrect data",
  "description": "",
  "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User navigates to 9gag registration website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the Email button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters a full name: XXX YYY",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters an email: wasylionsssss@gmail.com",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters a password: Klenio12@",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User checks I\u0027m not a robot checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on the Sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters an age: 22",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User again clicks on the Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should be taken to registration page with information about invalid input data",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_navigates_to_website()"
});
formatter.result({
  "duration": 1773580100,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 2182301800,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_clicks_on_the_Email_button_on_popup_window()"
});
formatter.result({
  "duration": 358126300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XXX YYY",
      "offset": 25
    }
  ],
  "location": "Register.user_enters_a_full_name(String)"
});
formatter.result({
  "duration": 382790100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wasylionsssss@gmail.com",
      "offset": 22
    }
  ],
  "location": "Register.user_enters_an_email(String)"
});
formatter.result({
  "duration": 230796100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Klenio12@",
      "offset": 24
    }
  ],
  "location": "Register.user_enters_a_password(String)"
});
formatter.result({
  "duration": 130132000,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_checks_I_m_not_a_robot_checkbox()"
});
formatter.result({
  "duration": 132882100,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_clicks_on_the_Sign_up_button()"
});
formatter.result({
  "duration": 1339436400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 20
    }
  ],
  "location": "Register.user_enters_an_age(String)"
});
formatter.result({
  "duration": 49598600,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027WRO1-LDL-P11439\u0027, ip: \u0027172.27.21.231\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}), userDataDir\u003dC:\\Users\\KACPER~1.LEN\\AppData\\Local\\Temp\\scoped_dir15184_195382339}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62590}, acceptInsecureCerts\u003dfalse, browserVersion\u003d80.0.3987.149, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue}]\nSession ID: 63c6c41eb2651d628bee2db500e7f734\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:114)\r\n\tat Registration9gag.StepsFiles.Register.user_enters_an_age(Register.java:188)\r\n\tat ✽.And User enters an age: 22(Register.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register.user_again_clicks_on_the_Sign_up_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.user_should_be_taken_to_unsuccessful_login_page()"
});
formatter.result({
  "status": "skipped"
});
});