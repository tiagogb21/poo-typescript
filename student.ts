// Nesse exercício consolidamos o conhecimento em poo (abstração e encapsulamento) com typescript

class Student {
  private _enrollment: string;
  private _name: string;
  private _examGrades: number[];
  private _workGrades: number[];

  constructor(
    enrollment: string,
    name: string,
  ) {
    this._enrollment = enrollment;
    this._name = name;
    this._examGrades = [];
    this._workGrades = [];
  }

  get enrollment(): string {
    return this._enrollment as string;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name as string;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres');
    }
    this._name = value;
  }

  get examGrades(): number[] {
    return this._examGrades;
  }

  set examGrades(value: number[]) {
    if(value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas');
    }
    this._examGrades = value;
  }

  get workGrades(): number[] {
    return this._workGrades;
  }

  set workGrades(value: number[]) {
    if(value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos');
    }
    this._workGrades = value;
  }

  sumGrades(): number {
    return [...this._examGrades, ...this.workGrades]
      .reduce((acc, curr) => acc + curr)
  }

  sumAverageGrades() {
    const allGrades = [...this._examGrades
      , ...this.workGrades];
    return allGrades
      .reduce((a, b) => a + b)/allGrades.length
  }
}

const personOne = new Student('202001011', 'Maria da Silva');

personOne.examGrades = [25, 20, 23, 23];
personOne.workGrades = [45, 45];

console.log(personOne);
console.log(
  'Soma de todas as notas: ',
  personOne.sumGrades()
);
console.log(
  'Média de todas as notas: ',
  personOne.sumAverageGrades().toFixed(2)
);
