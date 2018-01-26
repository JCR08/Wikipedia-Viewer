var searchurl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&limit=20&search=';
var searchTerm = 'trump';
url = searchurl + searchTerm;

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
