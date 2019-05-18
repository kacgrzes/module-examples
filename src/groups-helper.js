import { map } from "ramda";
import { getPersonFullName } from "./person-helpers";

// Ramda short map
export const getNamesOfConferenceAttendants = map(getPersonFullName);
