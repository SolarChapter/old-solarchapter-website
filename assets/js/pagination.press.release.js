paginationSection = document.getElementById("press-release-pagination")
currentPage = 1

$.getJSON('assets/js/press-release.json', function(json) {
    pressReleaseArray = json.pressRelease
    // change the number of article per page into dynamic
    totalPages = Math.ceil(pressReleaseArray.length/5)    
    paginationSection.innerHTML = setUpPageNumbers(totalPages)
    setActivatedPage(1)
})

function setUpPageNumbers(totalPages) {
    pageNumbers = "<ul>"
    for (i = 1; i <= totalPages; i++) {
        pageNumbers += 
            `<li>
                <button id="pagination` + i + `" onClick=changeCurrentPageOnClick(` + i + `) class="pagination-inactive">` + i + `</button>
            </li>
            `                                   
    }
    pageNumbers += "</ul>"
    return pageNumbers
}

function setActivatedPage(targetPage) {
    // inactivate current page
    console.log(document.getElementById("pagination" + currentPage))
    document.getElementById(`pagination` + currentPage).innerHTML = 
        `<li>
        <button id="pagination` + currentPage + `" onClick=changeCurrentPageOnClick(` + currentPage + `) class="pagination-inactive">` + currentPage + `</button>
        </li>`    
    
    // activate target page
    
    document.getElementById(`pagination` + targetPage).innerHTML = 
        `<li>
        <button id="pagination` + targetPage + `" onClick=changeCurrentPageOnClick(` + targetPage + `) class="pagination-active">` + targetPage + `</button>
        </li>
        `    
    currentPage = targetPage
}

function changeCurrentPageOnClick(targetPage) {
    pressReleaseUnorderedList.innerHTML = displayContents(targetPage, pressReleaseArray)
    setActivatedPage(targetPage)
}



