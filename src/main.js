import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Haiku } from './haiku.js';

const haiku = new Haiku("Apple","bannana","orange")



$(document).ready(function() {


  console.log("main - you made it here :" + haiku.line1 + haiku.line2 + haiku.line3)
  let found1 = haiku.syllableChecker1();
  console.log("main - found: " + found1);

  let found2 = haiku.syllableChecker2();
  console.log("main - found: " + found2);

  let found3 = haiku.syllableChecker3();
  console.log("mani - found: " + found3);
});
