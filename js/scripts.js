$(document).ready(function(){
  $("form").submit(function(event){
    var firstLength = parseFloat($("#firstLength").val());
    var secondLength = parseFloat($("#secondLength").val());
    var thirdLength = parseFloat($("#thirdLength").val());
    var isTriangle = function () {
      return ((firstLength + secondLength) > thirdLength
        && (secondLength + thirdLength) > firstLength
        && (firstLength + thirdLength) > secondLength);
    };

    if (!isTriangle()) {
      $(".triangle-tracker").show();
      $("#triangle-tracker").text("NOT a triangle")
    } else if (firstLength === secondLength && secondLength === thirdLength) {
      $(".triangle-tracker").show();
      $("#triangle-tracker").text("Equilateral");
    } else if (firstLength === secondLength || secondLength === thirdLength || firstLength === thirdLength) {
      $(".triangle-tracker").show();
      $("#triangle-tracker").text("Isosceles");
    } else if (firstLength !== secondLength && secondLength !== thirdLength ) {
      $(".triangle-tracker").show();
      $("#triangle-tracker").text("Scalene");
    }
    event.preventDefault()
  });
});
