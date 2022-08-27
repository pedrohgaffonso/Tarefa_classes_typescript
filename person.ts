export class Person {
  firstname: string;
  middlename: string;
  lastname: string;
  age: number;
  email: Array<string> = new Array();
  getFullName() {
    return this.firstname + ' ' + this.middlename + ' ' + this.lastname;
  }
  getBirtdayYear() {
    return new Date().getFullYear() - this.age;
  }
}
