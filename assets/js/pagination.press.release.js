paginationSection = document.getElementById("press-release-pagination-container")
currentPage = 1

$.getJSON('assets/js/press-release.json', function(json) {
    pressReleaseArray = json.pressRelease
    // change the number of article per page into dynamic
    totalPages = Math.ceil(pressReleaseArray.length/5)    
    paginationSection.innerHTML = setUpPageNumbers(totalPages)
    setActivatedPage(1)
})

function setUpPageNumbers(totalPages) {
    pageNumbers = ``
    for (i = 1; i <= totalPages; i++) {
        pageNumbers += 
        `<div class = "pagination" id = "pagination-container` + i + `">` + 
        `<div id="pagination` + i + `" onClick=changeCurrentPageOnClick(` + i + `) class="pagination-inactive">` + i + `</div>` +
        `</div>`
    }
    return pageNumbers
}

function setActivatedPage(targetPage) {
    // inactivate current page
    currentPageButton = document.getElementById(`pagination-container` + currentPage) 
    currentPageButton.innerHTML = `<div id="pagination` + currentPage + `" onClick=changeCurrentPageOnClick(` + currentPage + `) class="pagination-inactive">` + currentPage + `</div>`    
    
    // activate target page
    targetPageButton = document.getElementById(`pagination-container` + targetPage)
    targetPageButton.innerHTML = `<div id="pagination` + targetPage + `" onClick=changeCurrentPageOnClick(` + targetPage + `) class="pagination-active">` + targetPage + `</div>`    
    
    currentPage = targetPage
}

function changeCurrentPageOnClick(targetPage) {
    pressReleaseUnorderedList.innerHTML = displayContents(targetPage, pressReleaseArray)
    setActivatedPage(targetPage)
}



