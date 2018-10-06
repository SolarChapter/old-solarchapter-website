//Json parser

pressReleaseUnorderedList = document.getElementById("ul-press-release")


$.getJSON('assets/js/press-release.json', function(json) {
	pressReleaseArray = json.pressRelease
	for (var i = 0; i < pressReleaseArray.length; i++) {
		pressReleaseUnorderedList.innerHTML  +=
			`<li class="row-container">
				<div class="container-text">
					<a href=` + pressReleaseArray[i].newsUrl + `>
						<h2>`+ pressReleaseArray[i].title +`</h2>
					</a>
						<p>` + pressReleaseArray[i].subTitle +`</p>
				</div>
				<div class="container-image">
					<img src=` + pressReleaseArray[i].imageUrl + `alt="" style="max-width:100%;"/>
				</div>
			</li> 
			`	
	}
})


