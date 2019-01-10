import {Haiku, Week} from '/Users/Guest/desktop/haiku-checker/src/haiku.js';

describe("Haiku", function(){
  var haiku1;
  var haiku2;
  var haiku3;
  beforeEach(function() {
    haiku1 = new Haiku(
      "this sentence has more than five syallables",
      "this sentence definately has more than seven syallables",
      "but this has five though"
    );
    haiku2 = new Haiku(
      "worker bees can leave",
      "even drones can fly away",
      "the queen is their slave"
    );
    haiku3 = new Haiku(
      "one two three four five",
      "one two three four five six sev",
      "one two three four five"
    );
  });

it ( "determines whether line1 equals 5 syllables for haiku 1", function(){
  console.log(haiku1.syllableChecker1())
  expect(haiku1.syllableChecker1()).toBe(false)
})

it ( "determines whether line2 equals 7 syllables for haiku 1", function(){
  console.log(haiku1.syllableChecker2())
  expect(haiku1.syllableChecker2()).toBe(false)
})

it ( "determines whether line3 equals 5 syllables for haiku 1", function(){
  console.log(haiku1.syllableChecker3())
  expect(haiku1.syllableChecker3()).toBe(true)
})

it ( "determines whether line1 equals 5 syllables for haiku 2", function(){
  console.log(haiku2.syllableChecker1())
  expect(haiku2.syllableChecker1()).toBe(true)
})

it ( "determines whether line2 equals 7 syllables for haiku 2", function(){
  console.log(haiku2.syllableChecker2())
  expect(haiku2.syllableChecker2()).toBe(true)
})

it ( "determines whether line3 equals 5 syllables for haiku 2", function(){
  console.log(haiku2.syllableChecker3())
  expect(haiku2.syllableChecker3()).toBe(true)
})

it ( "determines whether line1 equals 5 syllables for haiku 3", function(){
  console.log(haiku3.syllableChecker1())
  expect(haiku3.syllableChecker1()).toBe(true)
})

it ( "determines whether line2 equals 7 syllables for haiku 3", function(){
  console.log(haiku3.syllableChecker2())
  expect(haiku3.syllableChecker2()).toBe(true)
})

it ( "determines whether line3 equals 5 syllables for haiku 3", function(){
  console.log(haiku3.syllableChecker3())
  expect(haiku3.syllableChecker3()).toBe(true)
})

describe("Week", function(){
  var week;
  beforeEach(function() {

    week = new Week(1980,"JUL",12)
});
    it ( "converts number day of the week into name of week day", function(){

      expect(week.checkDate()).toBe("Saturday")
    })





});

});
