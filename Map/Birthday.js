const NO_OF_PEOPLE = 50;
let birthdays = {};
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

for (let person = 0; person < NO_OF_PEOPLE; person++) {
  let month = Math.floor(Math.random() * 12);
  if (birthdays[MONTHS[month]] == undefined) {
    birthdays[MONTHS[month]] = [];
  }
  birthdays[MONTHS[month]].push(person);
}

console.log(birthdays);
