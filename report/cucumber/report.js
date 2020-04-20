$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register new account on 9gag",
  "description": " User should be able to create new account by using correct data:\r\n (\tfull name, \r\n \temail as user_name@server_name, \r\n \tpassword with length\u003e5 characters that are alphanumerics,\r\n \tage\u003e15\r\n )",
  "id": "register-new-account-on-9gag",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Register new account with incorrect data",
  "description": "",
  "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User navigates to 9gag registration website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the Email button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters a full name: \u003cfull name\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters an email: \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters a password: \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the Sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters an age: \u003cage\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User checks I\u0027m not a robot checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User again clicks on the Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be taken to registration page with information about invalid input data",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
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
      "line": 26,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;1"
    },
    {
      "cells": [
        "",
        "example@gmail.com",
        "Example12@",
        "22"
      ],
      "line": 27,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;2"
    },
    {
      "cells": [
        "XXX YYY",
        "@gmail.com",
        "Example12@",
        "22"
      ],
      "line": 28,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;3"
    },
    {
      "cells": [
        "XXX YYY",
        "example",
        "Example12@",
        "22"
      ],
      "line": 29,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;4"
    },
    {
      "cells": [
        "",
        "examplegmail.com",
        "Example12@",
        "22"
      ],
      "line": 30,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;5"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "",
        "22"
      ],
      "line": 31,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;6"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "Example12$",
        "22"
      ],
      "line": 32,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;7"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "Examp",
        "22"
      ],
      "line": 33,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;8"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "Example12@",
        ""
      ],
      "line": 34,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;9"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "Example12@",
        "XY"
      ],
      "line": 35,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;10"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "Example12@",
        "-16"
      ],
      "line": 36,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;11"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "Example12@",
        "15.99"
      ],
      "line": 37,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;12"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "Example12@",
        "15,99"
      ],
      "line": 38,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;13"
    },
    {
      "cells": [
        "XXX YYY",
        "example@gmail.com",
        "Example12@",
        "15"
      ],
      "line": 39,
      "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;14"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12542109700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Register new account with incorrect data",
  "description": "",
  "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User navigates to 9gag registration website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the Email button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters a full name: ",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters an email: example@gmail.com",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters a password: Example12@",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the Sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters an age: 22",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User checks I\u0027m not a robot checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User again clicks on the Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be taken to registration page with information about invalid input data",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_navigates_to_website()"
});
formatter.result({
  "duration": 1602406400,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_closes_the_pop_up_message()"
});
formatter.result({
  "duration": 878879200,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_clicks_on_the_Email_button_on_popup_window()"
});
formatter.result({
  "duration": 199313600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "Register.user_enters_a_full_name(String)"
});
formatter.result({
  "duration": 167184500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "example@gmail.com",
      "offset": 22
    }
  ],
  "location": "Register.user_enters_an_email(String)"
});
formatter.result({
  "duration": 326834300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Example12@",
      "offset": 24
    }
  ],
  "location": "Register.user_enters_a_password(String)"
});
formatter.result({
  "duration": 153324700,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_clicks_on_the_Sign_up_button()"
});
formatter.result({
  "duration": 88765700,
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
  "duration": 1018973100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027WRO1-LDL-P11439\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d80.0.3987.106 (f68069574609230cf9b635cd784cfb1bf81bb53a-refs/branch-heads/3987@{#882}), userDataDir\u003dC:\\Users\\KACPER~1.LEN\\AppData\\Local\\Temp\\scoped_dir17076_1867266746}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56498}, acceptInsecureCerts\u003dfalse, browserVersion\u003d80.0.3987.163, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue}]\nSession ID: 313c3482c2f081515b3378c2c3587d09\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:114)\r\n\tat Registration9gag.Pages.RegistrationPage.putAge(RegistrationPage.java:157)\r\n\tat Registration9gag.StepsFiles.Register.user_enters_an_age(Register.java:73)\r\n\tat ✽.And User enters an age: 22(Register.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Register.user_checks_I_m_not_a_robot_checkbox()"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "duration": 2087499800,
  "status": "passed"
});
formatter.before({
  "duration": 16684745100,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027WRO1-LDL-P11439\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00950C83+1707139]\n\tOrdinal0 [0x008B68F1+1075441]\n\tOrdinal0 [0x0082DE72+515698]\n\tOrdinal0 [0x00827CA8+490664]\n\tOrdinal0 [0x0082839B+492443]\n\tOrdinal0 [0x008292F5+496373]\n\tOrdinal0 [0x00824F05+478981]\n\tOrdinal0 [0x0082ECA0+519328]\n\tOrdinal0 [0x007DCA67+182887]\n\tOrdinal0 [0x007DBDDD+179677]\n\tOrdinal0 [0x007D9D4B+171339]\n\tOrdinal0 [0x007C1D4A+73034]\n\tOrdinal0 [0x007C2DC0+77248]\n\tOrdinal0 [0x007C2D59+77145]\n\tOrdinal0 [0x008CBB67+1162087]\n\tGetHandleVerifier [0x009EA966+508998]\n\tGetHandleVerifier [0x009EA6A4+508292]\n\tGetHandleVerifier [0x009FF7B7+594583]\n\tGetHandleVerifier [0x009EB1D6+511158]\n\tOrdinal0 [0x008C402C+1130540]\n\tOrdinal0 [0x008CD4CB+1168587]\n\tOrdinal0 [0x008CD633+1168947]\n\tOrdinal0 [0x008E5B35+1268533]\n\tBaseThreadInitThunk [0x755C6359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77D87B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77D87B44+180]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$22(ProtocolHandshake.java:365)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:368)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:159)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:184)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat Registration9gag.DriverSetUp.DriverSetUp.setUpChrome(DriverSetUp.java:31)\r\n\tat Registration9gag.DriverSetUp.DriverSetUp.driverSetUp(DriverSetUp.java:18)\r\n\tat Registration9gag.Pages.RegistrationPage.readBrowser(RegistrationPage.java:64)\r\n\tat Registration9gag.StepsFiles.Register.readBrowser(Register.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": "Register new account with incorrect data",
  "description": "",
  "id": "register-new-account-on-9gag;register-new-account-with-incorrect-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User navigates to 9gag registration website",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User closes the pop up message",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the Email button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters a full name: XXX YYY",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters an email: @gmail.com",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters a password: Example12@",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on the Sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters an age: 22",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User checks I\u0027m not a robot checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User again clicks on the Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be taken to registration page with information about invalid input data",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_navigates_to_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.user_closes_the_pop_up_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.user_clicks_on_the_Email_button_on_popup_window()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "@gmail.com",
      "offset": 22
    }
  ],
  "location": "Register.user_enters_an_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Example12@",
      "offset": 24
    }
  ],
  "location": "Register.user_enters_a_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.user_clicks_on_the_Sign_up_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Register.user_checks_I_m_not_a_robot_checkbox()"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "duration": 24800,
  "status": "passed"
});
