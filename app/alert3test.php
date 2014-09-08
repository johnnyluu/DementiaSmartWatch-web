<?php

class phproTest extends PHPUnit_Extensions_Selenium2TestCase
{
    protected function setUp()
    {
        // Which browser to use
        $this->setBrowser('firefox');
        // The base URL
        $this->setBrowserUrl('http://hungpohuang.com/agile/combined_code/app/#/');
    }

	public function _process() {
		return file_get_contents('http://hungpohuang.com/agile/combined_code/app/#/');
	}
	
    public function testContactName()
    {
        // The URL to test
        $this->url('http://hungpohuang.com/agile/combined_code/app/#/');
        // check the value of an element by ID
        //$this->assertEquals('Anonymous Coward', $this->byId('Name')->value());
		$this->timeouts()->implicitWait(15000);//10 seconds
		$el = $this->byId('alertnumber');
		//$s = $this->angular.element($el).scope();
		//print_r($el->value('numberOfAlerts'));
		print_r(count($this->byId('alertnumber')));
		print_r($el->length);
		//print_r($this->byId('alertnumber')->value());
		//print_r($this->findElement(WebDriverBy::id('function[alertnumber]')));
		//$this->assertEquals('16', $this->byId('alertnumber'));
		//$this->assertEquals('16', $this->byId('alertnumber')->value());
    }
}
?>