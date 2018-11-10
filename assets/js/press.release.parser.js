//Json parser
pressReleaseUnorderedList = document.getElementById("ul-press-release")

$.getJSON('/assets/js/press-release.json', function(json) {
	pressReleaseArray = json.pressRelease
	totalPages = Math.ceil(pressReleaseArray.length/5)
	// assigned by user clicked button, default = 1
	currentPage = 1 
	pressReleaseUnorderedList.innerHTML = displayContents(currentPage, pressReleaseArray)
})

function displayContents(page, infoArray) {
	startIndex = (page-1) * 5
	endIndex = 5 * page 
	
	// end index more than infoArray
	if (endIndex > infoArray.length) {
		endIndex = infoArray.length
	}

	paginatedContent = ""

	for (var i = startIndex; i < endIndex; i++) {
		paginatedContent +=
			`<li class="row-container">
				<div class="container-text">
					<a href=` + infoArray[i].newsUrl + `>
						<h2>`+ infoArray[i].title +`</h2>
					</a>
						<p>` + infoArray[i].subTitle +`</p>
				</div>
				<div class="container-image">
					<img src=` + infoArray[i].imageUrl + ` alt="" style="max-width:100%;"/>
				</div>
			</li> 
			`	
	}	
	return paginatedContent
}


