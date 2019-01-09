export class Haiku {
  constructor(line1,line2,line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  syllableChecker1() {
    let regex = /[aeiouAEIOU]/g;
    let found = this.line1.match(regex);
    return found;
  }

  syllableChecker2() {
    let regex = /[aeiouAEIOU]/g;
    let found = this.line2.match(regex);
    return found;
  }

  syllableChecker3() {
    let regex = /[aeiouAEIOU]/g;
    let found = this.line3.match(regex);
    return found;
  }
}
