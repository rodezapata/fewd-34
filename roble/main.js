var HEADER = {
  init: function() {
    $('.header').hide();
    $('.header#header_1').show();
  },
}

var NAV = {
  click: function() {
    var id = $(this).attr('ref');
    console.log(id);
    $('.carousel').carousel(id);
  }
}

$(function() {
  //HEADER.init();
  //$('.link').on('click', NAV.click);
});
