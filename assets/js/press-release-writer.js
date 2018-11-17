//Get ID of article
var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
}

var articleID = urlParam('articleID')
console.log(articleID)
//get JSON file of content-ID, and do stuff according to the json file

$.getJSON('/assets/js/press-release-contents.json', function(json) {


    var contentWithIDList = json.pressReleaseContents
    for (i in contentWithIDList) {
        if (contentWithIDList[i].articleID == articleID) {
           var articleContentRaw = contentWithIDList[i].contents

        }
    }
    
    var articleContentSplit = articleContentRaw.split("\n")

    for (i in articleContentSplit) {
        if (i == 0) {
            writeArticleTitle(articleContentSplit[0])
        } else {
            writeArticleBody(articleContentSplit[i])
        }
    }



})

function writeArticleTitle(title) {
    $(document).ready(function(){
        var sectionToWrite = $("#article-content").find("section").find("header")
    
        var textToWrite = "<h2><b>" + title + "</b></h2>"
        sectionToWrite.append(textToWrite)
    })
}

function writeArticleBody(content) {
    $(document).ready(function(){
        var sectionToWrite = $("#article-content").find("section")
        var textToWrite = $("<p></p").text(content)
        sectionToWrite.append(textToWrite)
    })
}






