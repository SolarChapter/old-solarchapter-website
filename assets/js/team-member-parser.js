var teams = ["uiuc", "michigan", "purdue"];

var index = 0;
var teamMemberPast = document.getElementById("uiuc-team-member-past")
var teamMemberCurrent = document.getElementById("uiuc-team-member-current")
var pastMemberExists = document.getElementById("pastMemberExists")

while (!teamMemberCurrent) {
    index++;
    var idNamePast = teams[index] + "-team-member-past";
    var idNameCurrent = teams[index] + "-team-member-current";
    teamMemberPast = document.getElementById(idNamePast);
    teamMemberCurrent = document.getElementById(idNameCurrent);
}

var jsonFile = "assets/js/teams/" + teams[index] + "-team.json"

$.getJSON(jsonFile, function(json) {
    teamMemberCurrent.innerHTML = displayContents(json.teamCurrent)
    if (json.teamPast.length != 0) {
        pastMemberExists.innerHTML = displayPastMemberHeader();
        teamMemberPast.innerHTML = displayContents(json.teamPast)
    }
})

function displayContents(teamMemberArray) {
    teamMemberContent = ''
	for (var i = 0; i < teamMemberArray.length; i++) {
        if (teamMemberArray[i].position.includes('&')) {
            positionArray = teamMemberArray[i].position.split('&')
            teamMemberArray[i].position =  `<span class="member-title">` + positionArray[0] + `</span>`  +
            `<span class="team-member-title">` + positionArray[1] + `</span>`
        }
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

function displayPastMemberHeader() {
    return '<br><br><header><h2 class="section-title"><strong>Past Team Members</strong></h2></header>'
}