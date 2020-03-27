import {TestInitilizerService} from './test-initilizer.service';

export function initializeApp1(testInitService: TestInitilizerService) {
  return () => {
    console.log('moj init');
    return testInitService.appInitCosTam().subscribe(data => console.log(data));
  };
}

export function initializeApp2(testInitService: TestInitilizerService) {
  return () => {
    console.log('moj init22');
  };
}
