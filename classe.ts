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
