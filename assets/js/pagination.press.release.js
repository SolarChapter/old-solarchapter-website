paginationSection = document.getElementById("press-release-pagination-container")
currentPage = 1


$.getJSON('assets/js/press-release.json', function(json) {
    pressReleaseArray = json.pressRelease
    // change the number of article per page into dynamic
    totalPages = Math.ceil(pressReleaseArray.length/5)    
    paginationSection.innerHTML = setUpPageNumbers(totalPages)
    setActivatedPage(1);
})

function setUpPageNumbers(totalPages) {
    pageNumbers = 
        `<div id = "pagination-container-previous" class = "pagination" >` + 
        `<div id="pagination-previous" onClick=changeCurrentPageOnClick("prev") class="pagination-button button-inactive">previous</div>` +
        `</div>`
    for (i = 1; i <= totalPages; i++) {
        pageNumbers += 
        `<div id = "pagination-container` + i + `" class = "pagination">` + 
        `<div id="pagination` + i + `" onClick=changeCurrentPageOnClick(` + i + `) class="pagination-button button-inactive">` + i + `</div>` +
        `</div>`
    }
    pageNumbers += 
        `<div id = "pagination-container-next" class = "pagination">` + 
        `<div id = "pagination-next" onClick=changeCurrentPageOnClick("next") class="pagination-button button-inactive">next</div>` +
        `</div>`
    return pageNumbers
}

function setActivatedPage(targetPage) {
    // inactivate current page
    currentPageButton = document.getElementById(`pagination-container` + currentPage) 
    currentPageButton.innerHTML = `<div id="pagination` + currentPage + `" onClick=changeCurrentPageOnClick(` + currentPage + `) class="pagination-button button-inactive">` + currentPage + `</div>`    
    
    // activate target page
    targetPageButton = document.getElementById(`pagination-container` + targetPage)
    targetPageButton.innerHTML = `<div id="pagination` + targetPage + `" onClick=changeCurrentPageOnClick(` + targetPage + `) class="pagination-button button-active">` + targetPage + `</div>`    
    
    currentPage = targetPage
}

function changeToPreviousPage() {
    if (currentPage > 1) {
        changeCurrentPageOnClick(currentPage - 1)
    } else {
        changeCurrentPageOnClick(1)
    }
}

function changeToNextPage() {
    if (currentPage < totalPages) {
        changeCurrentPageOnClick(currentPage + 1)
    } else {
        changeCurrentPageOnClick(totalPages)
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function changeCurrentPageOnClick(targetPage) {
    if (targetPage == "prev") {
        changeToPreviousPage()
    } else if (targetPage == "next"){
        changeToNextPage() 
    } else {
        pressReleaseUnorderedList.innerHTML = displayContents(targetPage, pressReleaseArray);
        setActivatedPage(targetPage);
        scrollToTop();
    }
}
