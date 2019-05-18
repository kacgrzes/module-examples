import * as personHelpers from "./person-helpers.js";
import { getNamesOfConferenceAttendants } from "./groups-helper.js";

const personOne = {
  firstName: "jan",
  lastName: "Nowak",
  age: 44
};

personHelpers.default();

const fullName = personHelpers.getPersonFullNameWithAge(personOne);
console.log(fullName);

const people = [
  { firstName: "Jan", lastName: "Nowak" },
  { firstName: "Ewa", lastName: "Kowalska" }
];

console.log(getNamesOfConferenceAttendants(people));
