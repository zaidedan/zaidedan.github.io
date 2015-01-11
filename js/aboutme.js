$(document).ready(function() {
  $.each(documents, function(i, paper) {
    if (paper.special == true) {
      var entry = '<li><b>' + paper.papertitle + '</b>.<br>';
      entry = entry + paper.authors + '. <br>';
      if (paper.papertype == "conference") {
        entry = entry + paper.conference + '. <br>';
      }
      if (paper.paper != "") {
        entry = entry + '<a = href="PDF/' + paper.paper + '"> Paper</a>. ';
      }
      if (paper.slides != "") {
        entry = entry + '<a = href="PDF/' + paper.slides + '"> Slides</a>. ';
      }
      entry = entry + paper.notes + '</li>';
      $('#selected-research').append(entry);
    }
  });
});