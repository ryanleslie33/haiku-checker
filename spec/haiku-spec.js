import {Haiku} from '/Users/Guest/desktop/haiku/src/haiku.js';

describe("Haiku", function(){
  var haiku;
  beforeEach(function() {
    haiku = new Haiku("this is my test sentence", "this", "this");

  });

it ( "checks if there are any vowels in the sentence", function(){

  expect(haiku.syllableChecker1()).toEqual(6)
})



});
