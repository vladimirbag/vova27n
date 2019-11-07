
Feature('Bus');

Scenario('test something', (I) => {
  I.amOnPage("https://global.flixbus.com/");
  pause();
  I.fillField("From", "Uberlinger");
  I.click(locate(//ul[starts-with(@class,"Dropdown")]/li).at('3');
  I.fillField("To", "Munich"),
  I.click(locate(//ul[starts-with(@class,"Dropdown")]/li).at('2');
  I.selectOption("Departure");
  I.click(locate('span').withText('31'), 'div[role=gridcell]');
  I.selectOption("Return");
  I.click(locate('span').withText('30'), 'div[role=gridcell]');
  I.click("Search flight");
});
