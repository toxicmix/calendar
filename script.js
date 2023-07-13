var now = dayjs();
var hour9Button = document.getElementById('hr9b');
var hour10Button = document.getElementById('hr10b');
var hour11Button = document.getElementById('hr11b');
var hour12Button = document.getElementById('hr12b');
var hour13Button = document.getElementById('hr13b');
var hour14Button = document.getElementById('hr14b');
var hour15Button = document.getElementById('hr15b');
var hour16Button = document.getElementById('hr16b');
var hour17Button = document.getElementById('hr17b');
var hour9Textarea = document.getElementById('hr9ta');
var hour10Textarea = document.getElementById('hr10ta');
var hour11Textarea = document.getElementById('hr11ta');
var hour12Textarea = document.getElementById('hr12ta');
var hour13Textarea = document.getElementById('hr13ta');
var hour14Textarea = document.getElementById('hr14ta');
var hour15Textarea = document.getElementById('hr15ta');
var hour16Textarea = document.getElementById('hr16ta');
var hour17Textarea = document.getElementById('hr17ta');
//dayjs.extend(relativeTime)
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  $('.saveBtn').on("click", function() {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('.description').val());
    console.log(localStorage.getItem($(this).parent().attr('id')));
  }
);

$('.time-block').each(function() {
  $(this).children('.description').val(localStorage.getItem($(this).attr('id')))
}
);
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  newDate = dayjs().startOf('d')
  console.log(now.diff(newDate, 'h'))
  
  for(let i = 9; i <= 17; i++){
    if(now.diff(newDate, 'h') > i){ //past
      $('#hour-' + i).addClass('past')
    }
    else if(now.diff(newDate, 'h') < i){ // future
      $('#hour-' + i).addClass('future')
    }
    else{ // now
      $('#hour-' + i).addClass('present')
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});

$(function showTime() {
  var timer = setInterval( function (){ 
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY hh:mm:ss a'));
  }, 1000)
});