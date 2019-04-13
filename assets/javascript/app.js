//WHAT TO TRACK
// apiKey
var apiKey = "8KbVOhLYhgRAMCKLxPTpkfNcq3fBPCVj";
// apiURL
// search term
var articles= [];


//WHAT TO DO
// TODO: get the search term
function getArticle (searchTerm) {
   var query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "&api-key=" + apiKey; 
    $.ajax( {
        url: query,
        method: "GET"
    }).then(function(response){
        searchResults = response.response.docs;
        $.each(searchResults, function(i, article){
            console.log(article);
            console.log(article.headline.main);
            console.log(article.pub_date);
        });
        
    });
}

getArticle("sacramento");
// TODO: make an api call
// TODO: display the results


