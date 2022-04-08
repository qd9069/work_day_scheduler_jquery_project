// set var to display day and time
var weekDay = moment ().format("dddd MMMM Do, YYYY");
$("#currentDay").text(weekDay);

// use class for "past", "present", and "future" to apply styles
// to the time-block divs accordingly.

// to set var for current hour
var currentHour = moment ().format("H");
// console.log(currentHour);
// var currentHour = 20;

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


for (var i=0; i < timeBlocks.length; i++) {
    if (currentHour == hours[i]) {
        timeBlocks[i].classList.add("present");
    } else 
    if (currentHour < hours[i]) {
        timeBlocks[i].classList.add("future");
    } else {
        timeBlocks[i].classList.add("past");
    }

}
  

// set vars for each hour div's textarea
var textArea9 = hour9.children[1];
var textArea10 = hour10.children[1];
var textArea11 = hour11.children[1];
var textArea12 = hour12.children[1];
var textArea13 = hour13.children[1];
var textArea14 = hour14.children[1];
var textArea15 = hour15.children[1];
var textArea16 = hour16.children[1];
var textArea17 = hour17.children[1];
// set array for all textareas
var textAreas = [textArea9, textArea10, textArea11, textArea12, textArea13, textArea14, textArea15, textArea16, textArea17];



// // ---- local storage for time block hour 9 only ------------------

//  // add EventListener to the save buttons
//  button9.addEventListener("click", function(event) {
//     event.preventDefault();

//     // get input value from the textarea
//     var text = textArea9.value.trim();

//     // use setItem to store the input text value in localStorage so that it can be used next time the user returns to the page
//     localStorage.setItem("event", text);
    
// });

// // get the input text value from local storage
// var savedText = localStorage.getItem("event");
// //  console.log(savedText);

// // to keep the saved text persists
// if (savedText) {
//     textArea9.value = savedText;
// }

// //--------------------------------------------------------


// jQuery - save the event text in local storage when click on the save icon
// set var for all of the hour div's buttons
var allButtons = $(".btn");
// console.log(buttons);


// set function to save the even text in local storage
allButtons.on("click", function () {
    
    // this - gives the button that I click on
    // console.log(this);
    var button = $(this);
    
    // get input value from the textarea
    var inputText = button.prev().val();
    // console.log(inputText);

    // use setItem to store the input text value in localStorage so that it can be used next time the user returns to the page
    // to get the id for the time-block div
    var id = button.parent(".time-block").attr("id");
    // console.log(id);

    localStorage.setItem(id, inputText);

});

// get the saved text value from local storage
    var savedText9 = localStorage.getItem("hour-9");
    var savedText10 = localStorage.getItem("hour-10");
    var savedText11 = localStorage.getItem("hour-11");
    var savedText12 = localStorage.getItem("hour-12");
    var savedText13 = localStorage.getItem("hour-13");
    var savedText14 = localStorage.getItem("hour-14");
    var savedText15 = localStorage.getItem("hour-15");
    var savedText16 = localStorage.getItem("hour-16");
    var savedText17 = localStorage.getItem("hour-17");
    var savedTexts = [savedText9, savedText10, savedText11, savedText12, savedText13, savedText14, savedText15, savedText16, savedText17];

// to keep the saved text persists
for (var j=0; j < savedTexts.length; j++) {

    if (savedTexts[j]) {
        textAreas[j].value = savedTexts[j];
    }

}
