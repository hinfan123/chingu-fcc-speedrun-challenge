//search box
$(function(){
  $('.input-search').focus(function(){
    $(this).parent().addClass('expanded');
  });
  
  $('.input-search').blur(function(){
    	$(this).parent().removeClass('expanded');
  });

  //autocomplete suggestions
  
/* Autocomplete not working

  $("#search").autocomplete({
	source: function(request, response) {
		$.ajax({
			url: "http://en.wikipedia.org/w/api.php",
			dataType: "jsonp",
      data: {
                    'action': "opensearch",
                    'format': "jsonp",
                    'search': request.term
                },
			success: function(data) {
				response(data[1]);
			}
		});
	}
});
*/

  //return search results when enter is pressed
  $("#search").keypress(function(e){
  if(e.which==13){
    
  e.preventDefault() // stop form submission

  var search = $("#search").val()
  search = encodeURIComponent(search);
  var url = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search="+search+"&suggest=true&origin=*&callback=?";
  console.log(url);
    
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:'json',
      success: function(data){
        $("#results").html('');
       for(var i=0; i<data[1].length;i++){
        $("#results").prepend("<li><a target='_blank' href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
       }
      },
      error: function(msg){
      $("#results").text("Error");
     }
});
  }
  });
});

 //to do
//add search button for mobiles
//add back to top
//change bottom padding