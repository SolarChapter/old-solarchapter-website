teamMemberPast = document.getElementById("ul-team-member-past")
teamMemberCurrent = document.getElementById("ul-team-member-current")

$.getJSON('assets/js/team.json', function(json) {
    teamMemberPast.innerHTML = displayContents(json.teamPast)
    teamMemberCurrent.innerHTML = displayContents(json.teamCurrent)
})

function displayContents(teamMemberArray) {
    teamMemberContent = ''
	for (var i = 0; i < teamMemberArray.length; i++) {
        teamMemberContent += `
        <div class="4u 12u(narrower)">
            <section>
                <a href="` + teamMemberArray[i].linkedin + `" class="team-member-item">
                    <img src="` + teamMemberArray[i].imagesource + `" class="team-member">
                    <h3>` + teamMemberArray[i].name + `</h3>` +
                        teamMemberArray[i].position +
                `</a>
            </section>
            
        </div>`
    }	
	return teamMemberContent
}