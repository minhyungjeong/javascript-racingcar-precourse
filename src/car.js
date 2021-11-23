export default function Car(name) {
  this.name = name;
  this.drivingDistance = 0;

  this.goForward = () => {
    drivingDistance++;
  };
}
