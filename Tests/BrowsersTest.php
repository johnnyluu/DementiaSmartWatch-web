<?php
require_once 'PHPUnit/Extensions/SeleniumTestCase.php';
require_once 'org.openqa.selenium.server.SeleniumServer';

class WebTest extends PHPUnit_Extensions_SeleniumTestCase
{
public static $browsers = array(
      //array(
      //  'browser' => '*firefox',
      //),
      //array(
      //  'browser' => '*chrome',
      //),
	  array(
        'browser' => '*iexplore',
      )
	  );
    protected function setUp()
    {
		SeleniumServer seleniumserver = new SeleniumServer();
        seleniumserver.boot();
        seleniumserver.start();
        //$this->setBrowser('*firefox');
        $this->setBrowserUrl('http://hungpohuang.com/agile/combined_code/app/#/');
    }

    public function testTitle()
    {
        $this->open('http://hungpohuang.com/agile/combined_code/app/#/');
        $this->assertTitle('DSW');
    }
}	
?>