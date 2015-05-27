
$(document).ready(function () {
  $('#weather').weatherfeed(['UKXX1565']);
  
  
  $('#photos').jflickrfeed({
		limit: 14,
		qstrings: {
			tags: 'stirling, stirlingcastle, scotland'
	},
	itemTemplate:
	'<li>' +
		'<a rel="colorbox" href="{{image_b}}" title="{{title}}">' +
			'<img src="{{image_s}}" alt="{{title}}" />' +
		'</a>' +
	'</li>'
}, function(data) {
	$('#photos li').colorbox();
});


  $.getJSON('http://en.wikipedia.org/w/api.php?action=parse&page=Stirling&prop=text&format=json&callback=?', function(json) { 
    $('#information').html(json.parse.text['*']); 
    $("#information").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");}); 
  });
  

}); /*ends jQuery*/

