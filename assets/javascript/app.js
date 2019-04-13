//WHAT TO TRACK
// apiKey
var apiKey = "8KbVOhLYhgRAMCKLxPTpkfNcq3fBPCVj";
// apiURL
// search term
var articles= [];

//search fields


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
            articles.push(article);
        });
        pouplateResults(10);
        
    });
}

function pouplateResults(max){
    for(var i = 0; i < max; i++){
        //create div to place in results
        var newArticle = $("<div>");
        
        var articleHeader = $("<h2>");
        articleHeader.text(articles[i].headline.main);

        var articleDate = $("<p>");
        articleDate.text(articles[i].pub_date);

        newArticle.append(articleHeader);
        newArticle.append(articleDate);

        console.log(newArticle);
        //$("body").append(newArticle);
    }
}

getArticle("sacramento");

// TODO: make an api call
// TODO: display the results


