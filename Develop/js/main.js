$(document).ready(function () {
  // find the date display area and assign the current date to it
  let currentDay = document.querySelector("#currentDay");
  currentDay.textContent = moment().format("dddd, ll");

  // two var that will use later
  let thatPlan = "";
  let thatTime = "";

  // save inputs
  $(".input-group-append").on("click", "#save-plan", function () {
    console.log("Save button is clicked!");
    thatPlan = $(this).parents().siblings(".form-control").val();
    thatTime = $(this).parents().parents().attr("id");
    console.log(thatPlan);
    console.log(thatTime);
    // save inputs to local storage
    localStorage.setItem(thatTime, thatPlan);
  });

  // remove inputs
  $(".input-group-append").on("click", "#remove-plan", function () {
    console.log("Plans Removed!");
    thatPlan = $(this).parents().siblings(".form-control").val("");
    thatTime = $(this).parents().parents().attr("id");
    // reset inputs to local storage
    localStorage.setItem(thatTime, "");
  });

  // update the highlight colours
  function changeHighlights() {
    // define the current hour
    let currentHour = moment().hour();
    // change buttons colors
    $(".input-group-append, .input-group-prepend")
      .children()
      .each(function () {
        thatTime = $(this).parents().parents().attr("id");
        if (thatTime < currentHour) {
          $(this).removeClass("current-color");
          $(this).addClass("past-color");
        } else if (thatTime == currentHour) {
          $(this).removeClass("next-color");
          $(this).addClass("current-color");
        } else {
          $(this).removeClass("past-color");
          $(this).addClass("next-color");
        }
      });
    // change the input colors
    $(".form-control").each(function () {
      thatTime = $(this).parents().attr("id");
      if (thatTime < currentHour) {
        $(this).removeClass("current-color-2");
        $(this).addClass("past-color-2");
      } else if (thatTime == currentHour) {
        $(this).removeClass("next-color-2");
        $(this).addClass("current-color-2");
      } else {
        $(this).removeClass("past-color-2");
        $(this).addClass("next-color-2");
      }
    });
  }

  // update the highlights, every time after refresh page
  changeHighlights();

  // check itself, call changeHighlights function every 15 sec
  // automatically change highlights every o'clock (after 15 sec)
  let interval = setInterval(changeHighlights, 15000);

  // retrieve saved inputs from user's local storage
  $("#9 .form-control").val(localStorage.getItem("9"));
  $("#10 .form-control").val(localStorage.getItem("10"));
  $("#11 .form-control").val(localStorage.getItem("11"));
  $("#12 .form-control").val(localStorage.getItem("12"));
  $("#13 .form-control").val(localStorage.getItem("13"));
  $("#14 .form-control").val(localStorage.getItem("14"));
  $("#15 .form-control").val(localStorage.getItem("15"));
  $("#16 .form-control").val(localStorage.getItem("16"));
  $("#17 .form-control").val(localStorage.getItem("17"));

  // clock interval of current time
  clockUpdate();
  setInterval(clockUpdate, 1000);

  // setup the clock function
  function clockUpdate() {
    let date = new Date();
    $(".digital-clock").css({ color: "#fff" });
    function addZero(x) {
      if (x < 10) {
        return (x = "0" + x);
      } else {
        return x;
      }
    }
    function twelveHour(x) {
      if (x > 12) {
        return (x = x - 12);
      } else if (x == 0) {
        return (x = 12);
      } else {
        return x;
      }
    }
    function everyHalfDay(x) {
      // define the current hour
      x = moment().hour();
      if (x > 12) {
        return "PM";
      } else if (x == 12) {
        return "PM";
      } else if (x == 0) {
        return "AM";
      } else {
        x < 12;
        return "AM";
      }
    }
    let h = addZero(twelveHour(date.getHours()));
    let m = addZero(date.getMinutes());
    let aOrP = everyHalfDay();
    $(".digital-clock").text(h + ":" + m + " " + aOrP);
  }
});
