teamMember2017 = document.getElementById("ul-team-member-2017")
teamMember2018 = document.getElementById("ul-team-member-2018")

$.getJSON('assets/js/team.json', function(json) {
    teamMember2017.innerHTML = displayContents(json.team2017)
    teamMember2018.innerHTML = displayContents(json.team2018)
})

function displayContents(teamMemberArray) {
    teamMemberContent = ''
	for (var i = 0; i < teamMemberArray.length; i++) {
        teamMemberContent += `
        <div class="row-container">
            <section class="row-element">
                <img src="` + teamMemberArray[i].imagesource + `" class="team-member">
                <a href= "` + teamMemberArray[i].linkedin + `" class="header">
                    <h3>` + teamMemberArray[i].name + `</h3></a>` +
                    teamMemberArray[i].position +
            `</section>
        </div>`
    }	
	return teamMemberContent
}