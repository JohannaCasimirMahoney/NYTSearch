//WHAT TO TRACK
// apiKey
var apiKey = "8KbVOhLYhgRAMCKLxPTpkfNcq3fBPCVj";
// apiURL
// search term

var apiKey = "HtGSB1iCElZ1OYJrqIfP76deJuiZfld3";

//WHAT TO DO
// TODO: get the search term
function getArticle (searchTerm) {
   var query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + apiKey; 
    $.ajax( {
        url: query,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
}
getArticle("Whatup");
// TODO: make an api call
// TODO: display the results


