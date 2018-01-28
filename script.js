function getData(e){
  e.preventDefault();
  var searchurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=20&search=';
  searchTerm = $(".searchTerm").val();
  var url = searchurl + searchTerm;

  $.ajax(url, {
    dataType: "json",
    data:{
      origin:'*'
    },
    type: "GET",
    success: function(data) {
      console.log(data);
    }
  });
}

$("#search").submit(getData);
