import { MIN_NUMBER, MAX_NUMBER } from './constants';

export default function Car(name) {
  this.name = name;
  this.drivingDistance = MIN_NUMBER;

  this.tryGoForward = () => {
    const randZeroToNine = Math.floor(Math.random() * MAX_NUMBER);
    if (randZeroToNine >= 4) {
      drivingDistance++;
    }
  };
}
