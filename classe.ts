class Person {
  // atributos:
  name: string;
  height: number;
  weight: number;

  constructor(name: string, height: number, weight: number) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  // Métodos:
  sleep() {
    console.log(`${this.name} zzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('Joao', 175, 66);

console.log(p1)
p1.sleep()

class Tv {
  // Atributos
  brand: string;
  size: number;
  resolution: number;
  connections: string;
  connectedTo: any;

  constructor(
    brand: string,
    size: number,
    resolution: number,
    connections: string,
  ) {
    this.brand = brand;
    this.size = size,
    this.resolution = resolution;
    this.connections = connections;
  }

  // Métodos:
  turnOn() {
    console.log(this.brand);
    console.log(this.size);
    console.log(this.resolution);
    console.log(this.connections);
  }
}

const tv1 = new Tv('Samsung', 14, 300, 'HDMI')

tv1.turnOn();