// Display the current date on the application
// Access the moment.js library to grab the format and modify it according to our preference
var today = moment().format("Do MMMM YYYY");

$("#currentDay").text(today);

// moment.js
var now = new Date().getHours();

var timeblocks = $('textarea');

function getData(){
    for (var j = 0; j < localStorage.length; j++) {
      var keyNumbers = localStorage.key(j);
      timeblocks.forEach(function(item) {
        if (item.dataset.number == keyNumbers) {
        item.value = localStorage.getItem(keyNumbers)
        }
      })   
    }
}

getData();

$(".Btn").on("click", function (event) {
    event.preventDefault();
    var notes = $(this).siblings("textarea").val();
    var rowHourActive = $(this).siblings("textarea").data("description");
    window.localStorage.setItem(rowHourActive, notes);
    
});

function statusTimeblock(){
    for (var i=0; i<timeblocks.length; i++) {
        var singleT = timeblocks[i];
        if (singleT.dataset.number == now) {
            singleT.classList.add("present");
        }
        if (singleT.dataset.number < now) {
            singleT.classList.add("past");
        }
        if (singleT.dataset.number > now) {
            singleT.classList.add("future");
        }  
    }  
}
statusTimeblock();

// Add an event to the clear button - the user should be able to clear his input
$(document).ready(function(){
    $('#clear-task').click(function(){
      $('textarea').val('');
    });
  });