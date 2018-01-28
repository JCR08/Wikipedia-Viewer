function getData(e){
  e.preventDefault();
  var searchurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=20&search=';
  searchTerm = $(".searchTerm").val();
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
    $(".searchTerm").attr("placeholder", "Please Enter A Search Term");
  };
};

function displayResults(data){
  console.log(data);
  for(var i = 0; i<data[1].length; i++){
    for(var j = 0; j<data[2].length; j++){
      for(var k = 0; k<data[3].length; k++){
        if(i === j && j === k){
          $("#searchResults").append(`<a class="resultPage" href=${data[3][k]} target="blank"><div class="result"><h3>${data[1][i]}</h3><p>${data[2][j]}</p></div></a>`);
        }
      }
    }
  }
}

$("#search").submit(getData);
