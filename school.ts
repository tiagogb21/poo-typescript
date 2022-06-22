class Studant {
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

  get examsGrades(): number[] {
    return this.examsGrades;
  }

  set examsGrades(value: number[]) {
    if(value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas');
    }
    this.examsGrades = value;
  }

  get worksGrades(): number[] {
    return this.worksGrades;
  }

  set worksGrades(value: number[]) {
    if(value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de provas');
    }
    this.worksGrades = value;
  }

  sumGrades() {

  }
}