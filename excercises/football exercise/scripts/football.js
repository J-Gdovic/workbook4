"use strict";

const teams = [
  { name: "Dallas Cowboys", abbrev: "DAL" },
  { name: "Pittsburgh Steelers", abbrev: "PIT" },
  { name: "Devnver Broncos", abbrev: "DEN" },
  { name: "Huston Texans", abbrev: "HOU" },
  { name: "Kansas City Cheifs", abbrev: "KAN" },
];

let footballTeams = document.getElementById("footballTeams");

function selectFootballTeam() {
  for (const team of teams) {
    // let option = document.createElement("option");
    // console.log(teams)
    // option.textContent = team.name;
    // option.value = team.abbrev;
    // footballTeams.appendChild(option);
    let option = new Option(team.name, team.abbrev);
    footballTeams.appendChild(option);
  }
}
selectFootballTeam();


let selectTeamButton = document.getElementById("selectTeamButton");
function displayTeamOnClick() {
  let outPutTeam = document.getElementById("outPutTeam");
  outPutTeam.innerText = footballTeams.value;
if(footballTeams.value == "select"){ 
alert("You have not selected a team")
}
}
selectTeamButton.onclick = displayTeamOnClick;
