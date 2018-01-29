// function moveToSelected(element) {
//
//   if (element == "next") {
//     var selected = $(".selected").next();
//   } else if (element == "prev") {
//     var selected = $(".selected").prev();
//   } else {
//     var selected = element;
//   }
//
//   var next = $(selected).next();
//   var prev = $(selected).prev();
//   var prevSecond = $(prev).prev();
//   var nextSecond = $(next).next();
//
//   // if next doesn't have, create a new date
//   $(selected).removeClass().addClass("selected");
//
//   $(next).removeClass().addClass("next");
//   $(prev).removeClass().addClass('hideLeft');
//
//   $(nextSecond).removeClass().addClass("nextRightSecond");
//   $(prevSecond).removeClass().addClass('hideLeft');
//
//   $(nextSecond).nextAll().removeClass().addClass('hideRight');
//   $(prevSecond).prevAll().removeClass().addClass('hideLeft');
//
// }
//
// $(document).on('turbolinks:load', function() {
//   $('#carousel div').click(function() {
//     moveToSelected($(this));
//   });
//
//   $('#prev').click(function() {
//     moveToSelected('prev');
//   });
//
//   $('#next').click(function() {
//     moveToSelected('next');
//   });
// })
