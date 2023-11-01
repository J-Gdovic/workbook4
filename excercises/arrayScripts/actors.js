"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

for (const academyMember of academyMembers) {
  if (academyMember.memID == 187) {
    //console.log(academyMember.name);
  }
}

for (const academyMember of academyMembers) {
  if (academyMember.films.length >= 3) {
    //console.log(academyMember.name);
  }
}

for (const academyMember of academyMembers) {
  if (academyMember.name.indexOf("Bob") != -1) {
    //console.log(academyMember.name);
  }
}

for (const academyMember of academyMembers) {
    for (const filmName of academyMember.films) {
        if (filmName.indexOf("A")==0) {
            console.log(academyMember.name);
        }
    }
}

