import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Haiku } from './haiku.js';





$(document).ready(function() {
$("#form").submit(function(event){
event.preventDefault()
  let mainline1 = $("#line1").val();
  console.log(mainline1)
  let mainline2 = $("#line2").val();
  let mainline3 = $("#line3").val();
  let haiku = new Haiku(mainline1,mainline2,mainline3);
  console.log(haiku.isAHaiku());
  $("#output").text("its a haiku poem" + haiku.line1 + haiku.line2 + haiku.line3);

})

});
