export class Haiku {
  constructor(line1,line2,line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  //In English, a diphthong is one vowel sound represented by two letters of vowels
  //const dipthong = ["ai", "ay", "ee", "ea", "ie", "ei", "oo", "ou", "ow", "oe", "oo", "ue", "ey", "ay", "oy", "oi", "au", "aw"];




  syllableChecker1() {
    let regex = /oo|y\b|[^aeiou]le\b|[^aeiou]les\b|[aeiou]|[^aeiou]e\b/g;
    let found = this.line1.match(regex);
    if (found.length < 6) {
      return true }
    return false;
  }

  syllableChecker2() {
    let regex = /oo|y\b|[^aeiou]le\b|[^aeiou]les\b|[aeiou]|[^aeiou]e\b/g;
    let found = this.line2.match(regex);
    if (found.length < 8) {
      return true }
    return false;
    }

    syllableChecker3() {
      let regex = /oo|y\b|[^aeiou]le\b|[^aeiou]les\b|[aeiou]|[^aeiou]e\b/g;
      let found = this.line3.match(regex);
      if (found.length < 6) {
        return true }
      return false;
      }



  }
