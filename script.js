function getData(e){
  e.preventDefault();
  var searchurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=20&search=';
  var searchTerm = $(".searchTerm").val();
  var url = searchurl + searchTerm;

  if(searchTerm.length > 0){
    $.ajax(url, {
      dataType: "json",
      data:{
        origin:'*'
      },
      type: "GET",
      success: function(data) {
        displayResults(data);
      }
    });
  } else {
    $(".searchTerm").attr("placeholder", "Search Something");
  };
};

function displayResults(data){
  $("#searchResults").empty();
  $(".searchBox").animate({"margin": "5% auto auto auto"},500);
  for(var i = 0; i<data[1].length; i++){
    for(var j = 0; j<data[2].length; j++){
      if(data[2][j].length > 250){
        var substring = data[2][j].substring(0,250);
      }
      for(var k = 0; k<data[3].length; k++){
        if(i === j && j === k){
          if(data[2][j].length > 250){
            $("#searchResults").append(`<a class="resultPage" href=${data[3][k]} target="blank"><div class="result"><h3>${data[1][i]}</h3><p>${substring}...</p></div></a>`);
          }else{
            $("#searchResults").append(`<a class="resultPage" href=${data[3][k]} target="blank"><div class="result"><h3>${data[1][i]}</h3><p>${data[2][j]}</p></div></a>`);
          }
        }
      }
    }
  }
}

// INCREASES SEARCH WINDOW //
$("input").click(function(){
  $.when($("input").animate({width: "100%"}, 500)).done(function(){
    $("i").removeClass('hidden');
  });
});

// MINIMIZES SEARCH WINDOW //
$("i").click(function(){
  $("#searchResults").empty();
  $(".searchTerm").val("");
  $(".searchTerm").attr("placeholder", "");
  $("i").addClass('hidden');
  $.when($("input").animate({width: "12%"}, 500)).done(function(){
    $(".searchBox").animate({"margin": "20% auto auto auto"}, 500);
  })

});

$("#search").submit(getData);
