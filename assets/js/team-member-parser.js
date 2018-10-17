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