var numentries = 0;
var entry = 0;

$(document).ready(function() {

  numentries = pages.length;
  $.each(pages, function(i, val) {
    $("#posts").append('<li><a href="#" onclick=load_post(' + i + ')>' + val.shortTitle + '</a></li>');
  });
  if (numentries > 0) {
    load_post(numentries - 1);
  }
});

function load_post(postid) {
  // $("#blog-content").remove();
  $("#blog-content").load("meshing/" + pages[postid].html);

  entry = postid;
  if (postid == numentries - 1) {
    $("#next-button").addClass("disabled");
    $("#previous-button").removeClass("disabled");
  } else if (postid == 0) {
    $("#previous-button").addClass("disabled");
    $("#next-button").removeClass("disabled");
  } else {
    $("#next-button").removeClass("disabled");
    $("#previous-button").removeClass("disabled");
  }
}