export class Haiku {
  constructor(line1,line2,line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }


  syllableChecker1() {
    let regex = /[aeiou]dge\b|eau|[cg]eous|[cgt]ious|qu[aeiou]|ai|ay|ee|ea|ie|ei|oo|ou|ow|oe|oo|ue|ey|ay|oy|oi|au|aw|y\b|[^aeiou]le\b|[^aeiou]les\b|[a-z]{2}es\b|[a-z]{2}e\b|ia|[aeiou]/g;
    let found = this.line1.match(regex);
    console.log(found)
    if (found.length === 5) {
      return true }
      return false;
    }

  syllableChecker2() {
    let regex = /[aeiou]dge\b|eau|[cg]eous|[cgt]ious|qu[aeiou]|ai|ay|ee|ea|ie|ei|oo|ou|ow|oe|oo|ue|ey|ay|oy|oi|au|aw|y\b|[^aeiou]le\b|[^aeiou]les\b|[a-z]{2}es\b|[a-z]{2}e\b|ia|[aeiou]/g;
    let found = this.line2.match(regex);
    console.log(found)
    if (found.length === 7) {
      return true }
      return false;
    }

  syllableChecker3() {
    let regex = /[aeiou]dge\b|eau|[cg]eous|[cgt]ious|qu[aeiou]|ai|ay|ee|ea|ie|ei|oo|ou|ow|oe|oo|ue|ey|ay|oy|oi|au|aw|y\b|[^aeiou]le\b|[^aeiou]les\b|[a-z]{2}es\b|[a-z]{2}e\b|ia|[aeiou]/g;
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


export class Week {
  constructor(year,month,day){
    this.year = year;
    this.month = month;
    this.day = day;
  }

  checkDate() {
    switch (this.month) {

    case "JAN":
    this.month = 0;
    break;

    case "FEB":
    this.month = 1;
    break;

    case "MAR":
    this.month = 2;
    break;

    case "APR":
    this.month = 3;
    break;

    case "MAY":
    this.month = 4;
    break;

    case "JUN":
    this.month = 5;
    break;

    case "JUL":
    this.month = 6;
    break;

    case "AUG":
    this.month = 7;
    break;

    case "SEP":
    this.month = 8;
    break;

    case "OCT":
    this.month = 9;
    break;

    case "NOV":
    this.month = 10;
    break;

    case "DEC":
    this.month = 11;
    }


var output_day;

let another_date_object = new Date(this.year,this.month,this.day);

let weekday = another_date_object.getDay();  //This should be a number between 0 and 6

    switch (weekday) {
    case 0:
    output_day = "Sunday";
    break;
    case 1:
    output_day = "Monday";
    break;
    case 2:
    output_day = "Tuesday";
    break;
    case 3:
    output_day = "Wednesday";
    break;
    case 4:
    output_day = "Thursday";
    break;
    case 5:
    output_day = "Friday";
    break;
      case 6:
      output_day = "Saturday";
    }
    return output_day;
  }
}
