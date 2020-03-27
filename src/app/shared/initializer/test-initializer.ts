import {TestInitilizerService} from './test-initilizer.service';

export function initializeApp1(testInitService: TestInitilizerService) {
  return () => {
    return testInitService.Init();
  };
}
