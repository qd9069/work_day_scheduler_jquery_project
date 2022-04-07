// set var to display day and time
var weekDay = moment ().format("dddd MMMM Do, YYYY");
$("#currentDay").text(weekDay);

// use class for "past", "present", and "future" to apply styles
// to the time-block divs accordingly.

// to set var for current hour
// var currentHour = moment ().format("H");


// set vars for each hour div
var hour9 = document.getElementById("hour-9");
var hour10 = document.getElementById("hour-10");
var hour11 = document.getElementById("hour-11");
var hour12 = document.getElementById("hour-12");
var hour13 = document.getElementById("hour-13");
var hour14 = document.getElementById("hour-14");
var hour15 = document.getElementById("hour-15");
var hour16 = document.getElementById("hour-16");
var hour17 = document.getElementById("hour-17");
// set array for all hours
var timeBlocks = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

// set a for loop to change block color based on the current hour
    // for past hour, use the class for past - grey
    // for current hour, use the class for present - red
    // for future hour, use the class for future - green

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentHour = 18;

for (var i=0; i < timeBlocks.length; i++) {
    if (currentHour === hours[i]) {
        timeBlocks[i].classList.add("present");
    } else 
    if (currentHour < hours[i]) {
        timeBlocks[i].classList.add("future");
    } else {
        timeBlocks[i].classList.add("past");
    }

}
    

// save the event text in local storage when click on the save icon