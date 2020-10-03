// find the date display area and assign the current date to it
let currentDay = document.querySelector("#currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do YYYY");

let thatPlan = "";
let thatTime = "";

// define the current hour
let currentHour = moment().hour();
console.log("The current hour is " + currentHour);
/*** note: if need to convert military (24 hour) time to 12 hour
let currentHour = moment().format("hA"); ***/

// after the inputs & to save them
$(".input-group-append").on("click", "#save-plan", function () {
  console.log("Save button is clicked!");

  thatPlan = $(this).parents().siblings(".form-control").val();
  thatTime = $(this).parents().parents().attr("id");
  console.log(thatPlan);
  console.log(thatTime);

  localStorage.setItem(thatTime, thatPlan);
});

// update the highlight colours
function changeHighlights() {
  $(".input-group-append, .input-group-prepend")
    .children()
    .each(function () {
      thatTime = $(this).parents().parents().attr("id");

      if (thatTime === currentHour) {
        $(this).addClass("current-color");
      }
      // NEED TO CHANGE < TO > FOR REAL USE!!!
      else if (thatTime > currentHour) {
        $(this).addClass("next-color");
      }
      // the past hours
      else {
        return false;
      }
    });
  $(".form-control").each(function () {
    thatTime = $(this).parents().attr("id");

    if (thatTime === currentHour) {
      $(this).addClass("current-color-2");
    }
    // NEED TO CHANGE < TO > FOR REAL USE!!!
    else if (thatTime > currentHour) {
      $(this).addClass("next-color-2");
    }
    // the past hours
    else {
      return false;
    }
  });
}

changeHighlights();

setInterval(changeHighlights, 15000);

// remove inputs
$(".input-group-append").on("click", "#remove-plan", function () {
  console.log("Plans Removed!");
  thatPlan = $(this).parents().siblings(".form-control").val("");
  thatTime = $(this).parents().parents().attr("id");

  localStorage.setItem(thatTime, "");
});

$("#9 .form-control").val(localStorage.getItem("9"));
$("#10 .form-control").val(localStorage.getItem("10"));
$("#11 .form-control").val(localStorage.getItem("11"));
$("#12 .form-control").val(localStorage.getItem("12"));
$("#13 .form-control").val(localStorage.getItem("13"));
$("#14 .form-control").val(localStorage.getItem("14"));
$("#15 .form-control").val(localStorage.getItem("15"));
$("#16 .form-control").val(localStorage.getItem("16"));
$("#17 .form-control").val(localStorage.getItem("17"));

// // save user inputs to local storage
// let saveInput = function () {
//   localStorage.setItem("inputs", JSON.stringify(tasks));
// };

// var saveInputs = function (inputText, inputTime) {
//   localStorage.setItem("inputs", JSON.stringify(inputs));
// };

// $(this).parents().siblings().children().addClass("next-color");
