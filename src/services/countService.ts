import { sleepNoPromise } from '../function';


class CountService {
  public chooseColor(count: number) {
    if(count % 2 === 0) {
      return 'red';
    }

    if(count % 3 === 0) {
      return 'green';
    }

    if(count % 5 === 0) {
      return 'blue'
    }

    return 'orange';
  };

}

export { CountService };
export default new CountService();