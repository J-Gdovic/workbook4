"use strict";

let myInfo = {
  name: "Pursalane Faye",
  adress: "121 Main Street",
  city: "Benbrook",
  state: "Texas",
  zip: "76126",
};
let info = `${myInfo.name} 
 ${myInfo.adress} 
${myInfo.city} ${myInfo.state},${myInfo.zip}`


function printContact(myInfo) {
  console.log(info);
}
printContact(myInfo);
