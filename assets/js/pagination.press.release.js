paginationSection = document.getElementById("press-release-pagination")
currentPage = 1

$.getJSON('assets/js/press-release.json', function(json) {
    pressReleaseArray = json.pressRelease
    // change the number of article per page into dynamic
    totalPages = Math.ceil(pressReleaseArray.length/5)  
    paginationSection.innerHTML = setUpPageNumbers(totalPages)
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



function changeCurrentPageOnClick(targetPage) {
	pressReleaseUnorderedList.innerHTML = displayContents(targetPage, pressReleaseArray)
}

