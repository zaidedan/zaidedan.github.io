$(document).ready(function() {
    $('#documents').append('<h2> Research </h2><br>');

  $.each(documents, function(i, paper) {
    if (paper.topic == "cfd" && paper.papertype != "poster") {
      var entry = '<li><b>' + paper.papertitle + '</b>.<br>';

      entry = entry + paper.authors + '. <br>';
      entry = entry + '<b>'+ 'Description:</b> '+ paper.describe + '<br>'
      if (paper.papertype == "conference") {
        entry = entry +'<b>Presented at: </b>' + paper.conference + '. <br>';
      }
      if (paper.papertype == "dissertation") {
        entry = entry +'<b>Ph.D. Dissertation </b><br>';
      }

      if (paper.paper != "") {
        entry = entry + '<a = href="PDF/' + paper.paper + '"> Paper</a>. ';
      }
      if (paper.slides != "") {
        entry = entry + '<a = href="PDF/' + paper.slides + '"> Slides</a>. ';
      }
      if (paper.poster != "") {
        entry = entry + '<a = href="PDF/' + paper.poster + '"> Poster</a>. ';
      }
      entry = entry + paper.notes + '</li><br>';
      $('#documents').append(entry);
    }
  });
  $('#documents').append('<h2> Posters </h2><br>');

  $.each(documents, function(i, paper) {
    if (paper.topic == "cfd" && paper.papertype == "poster") {
      var entry = '<li><b>' + paper.papertitle + '</b>.<br>';

      entry = entry + paper.authors + '. <br>';
      entry = entry + '<b>'+ 'Description:</b> '+ paper.describe + '<br>'
      if (paper.papertype == "poster") {
      }
      if (paper.paper != "") {
        entry = entry + '<a = href="PDF/' + paper.paper + '"> Paper</a>. ';
      }
      if (paper.slides != "") {
        entry = entry + '<a = href="PDF/' + paper.slides + '"> Slides</a>. ';
      }
      if (paper.poster != "") {
        entry = entry + '<a = href="PDF/' + paper.poster + '"> Poster</a>. ';
      }
      entry = entry + paper.notes + '</li><br>';
      $('#documents').append(entry);
    }
  });
});