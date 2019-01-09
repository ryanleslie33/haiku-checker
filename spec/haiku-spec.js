import {Haiku} from '/Users/Guest/desktop/haiku/src/haiku.js';

describe("Haiku", function(){
  var haiku;
  beforeEach(function() {
    haiku = new Haiku("like fire cafe eat food fee this eat fee fee this this", "sentence sentence sentece this that the the the the the the the", " computer computer computer computer the the the the the");

  });

it ( "determines whether line has <= 5 syllables", function(){

  console.log(haiku.syllableChecker1())
  expect(haiku.syllableChecker1()).toBe(false)
})

it ( "determines whether line has <= 7 syllables", function(){
  console.log(haiku.syllableChecker2())
  expect(haiku.syllableChecker2()).toBe(false)
})

it ( "determines whether line has <= 5 syllables", function(){
  console.log(haiku.syllableChecker3())
  expect(haiku.syllableChecker3()).toBe(false)
})

});
