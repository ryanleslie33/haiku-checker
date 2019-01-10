import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Haiku, Week } from './haiku.js';



const userTime = new Date()

$(document).ready(function() {
$("#form").submit(function(event){
event.preventDefault()
  let mainline1 = $("#line1").val();
  let mainline2 = $("#line2").val();
  let mainline3 = $("#line3").val();
  let haiku = new Haiku(mainline1,mainline2,mainline3);
    haiku.isAHaiku();
  $("#output").html("<p> " + haiku.isAHaiku() + ' </p><p>' + haiku.line1 + ", </p><p>"  + haiku.line2 + ", </p><p>"  + haiku.line3 +  ", </p><p>"   + "Time: </p>" + userTime + "</p>");
});
  $("#form2").submit(function(event){
  event.preventDefault()
  let year = $("#year").val();
  let month = $("#month").val();
  let day = $("#day").val();
  let dayOfWeek = new Week(year,month,day);
  $("#output2").text(dayOfWeek.checkDate());

})

});
