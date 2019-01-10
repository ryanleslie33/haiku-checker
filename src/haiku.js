export class Haiku {
  constructor(line1,line2,line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }




  syllableChecker1() {
    let regex = /ai|ay|ee|ea|ie|ei|oo|ou|ow|oe|oo|ue|ey|ay|oy|oi|au|iou|uee|qu|aw|y\b|[^aeiou]le\b|[^aeiou]les\b|[a-z]{2}e\b|[aeiou]/g;
    let found = this.line1.match(regex);
    console.log(found)
    if (found.length === 5) {
      return true }
      return false;
    }

  syllableChecker2() {
    let regex = /ai|ay|ee|ea|ie|ei|oo|ou|ow|oe|oo|ue|ey|ay|oy|oi|au|iou|uee|qu|aw|y\b|[^aeiou]le\b|[^aeiou]les\b|[a-z]{2}e\b|[aeiou]/g;
    let found = this.line2.match(regex);
      console.log(found)
    if (found.length === 7) {
      return true }
      return false;
    }

  syllableChecker3() {
    let regex = /ai|ay|ee|ea|ie|ei|oo|ou|ow|oe|oo|ue|ey|ay|oy|oi|au|iou|uee|qu|aw|y\b|[^aeiou]le\b|[^aeiou]les\b|[a-z]{2}e\b|[aeiou]/g;
    let found = this.line3.match(regex);
      console.log(found)
    if (found.length === 5) {
      return true }
      return false;
    }

  isAHaiku() {
    if ((this.syllableChecker1() === true) && (this.syllableChecker2()=== true) && (this.syllableChecker3() === true)) {
      console.log("Is a haiku")
      return true;
    } else {
      console.log("Is NOT a haiku")
      return false;
    }
  }

}
