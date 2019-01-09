import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Haiku } from './haiku.js';

const haiku = new Haiku("Apple","bannana","orange")



$(document).ready(function() {
  let x = 1;
  console.log("you made it here :" + haiku.line1 + haiku.line2 + haiku.line3 + x)
  let found1 = haiku.syllableChecker1();
  console.log("found: " + found1);
  
  let found2 = haiku.syllableChecker2();
  console.log("found: " + found2);

  let found3 = haiku.syllableChecker3();
  console.log("found: " + found3);
});
