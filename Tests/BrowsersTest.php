<?php
require_once 'PHPUnit/Extensions/SeleniumTestCase.php';

class WebTest extends PHPUnit_Extensions_SeleniumTestCase
{
public static $browsers = array(
      array(
        'browser' => '*firefox',
      ),
      array(
        'browser' => '*chrome',
      ),
	  array(
        'browser' => '*iexplore',
      )
	  );
    protected function setUp()
    {
        //$this->setBrowser('*firefox');
        $this->setBrowserUrl('http://hungpohuang.com/agile/combined_code/');
    }

    public function testTitle()
    {
        $this->open('http://hungpohuang.com/agile/combined_code/');
        $this->assertTitle('DSM');
    }
}	
?>