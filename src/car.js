import { MIN_NUMBER, MAX_NUMBER } from './constants.js';

export default function Car(name) {
  this.name = name;
  this.numberOfDrivingDistance = MIN_NUMBER;
  this.hypenOfdrivingDistance = '';

  this.tryGoForward = () => {
    const randZeroToNine = Math.floor(Math.random() * MAX_NUMBER);
    if (randZeroToNine >= 4) {
      this.numberOfDrivingDistance++;
      this.hypenOfdrivingDistance += '-';
    }
  };
}
