"use strict";

const teams = [
  { name: "Dallas Cowboys", code: "DAL", plays: "Arlington, TX" },
  { name: "Pittsburgh Steelers", code: "PIT", plays: "Pittsburgh, PA" },
  { name: "Devnver Broncos", code: "DEN", plays: "Denver, CO" },
  { name: "Huston Texans", code: "HOU", plays: "Houston, TX" },
  { name: "Kansas City Cheifs", code: "KAN", plays: "Kansas City, MO" },
];

let footballTeams = document.getElementById("footballTeams");

function selectFootballTeam() {
  for (const team of teams) {
    // let option = document.createElement("option");
    // console.log(teams)
    // option.textContent = team.name;
    // option.value = team.code;
    // footballTeams.appendChild(option);
    let option = new Option(team.name, team.code);
    footballTeams.appendChild(option);
  }
}

let outPutTeam = document.getElementById("outPutTeam");
let selectTeamButton = document.getElementById("selectTeamButton");
function displayTeamOnClick() {
  const teamCode = footballTeams.value;
  for (const team of teams) {
    if (team.code = teamCode) {
      const details = `You selected the ${team.name} (${team.code}) who play in ${team.plays}`;
      outPutTeam.innerText = details;
      
    }
  }
}
selectTeamButton.onclick = displayTeamOnClick;
selectFootballTeam();