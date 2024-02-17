// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
  $("#calculateBtn").click(function () {
    var hours = $("#hours").val();

    // Check if hours is a valid number
    if ($.isNumeric(hours) && (hours > 0)) {
      var ratePerHour = 20; // You can change this rate as per your preference
      var totalCost = hours * ratePerHour;
      $("#cost").html(
        "<p class='lead'>The cost for " +
          hours +
          " hours would be: $" +
          totalCost +
          "</p>"
      );
    } else {
      alert("Please enter a valid number for hours.");
    }
  });
});
