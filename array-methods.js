const people = [
  { id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician', accomplishment: 'spaceflight calculations' },
  { id: 1, name: 'Mario José Molina-Pasquel Henríquez', profession: 'chemist', accomplishment: 'discovery of Arctic' },
  { id: 2, name: 'Mohammad Abdus Salam', profession: 'physicist', accomplishment: 'electromagnetism theory', imageId: 'bE7W1ji' },
  { id: 3, name: 'Percy Lavon Julian', profession: 'chemist', accomplishment: 'pioneering cortisone drugs, steroids' },
  { id: 4, name: 'Subrahmanyan Chandrasekhar', profession: 'astrophysicist', accomplishment: 'white dwarf star mass' }
];

function taskZero(obj) {
  delete obj.imageId;
  return obj;
}
const cleanedPeople = people.map(taskZero);

function isChemist(person) {
  return person.profession === 'chemist';
}

function isNotChemist(person) {
  return person.profession !== 'chemist';
}

const chemists = cleanedPeople.filter(isChemist);
const everyoneElse = cleanedPeople.filter(isNotChemist);

function hasThreeTokens(person) {
  const parts = person.name.split(' ');
  return parts.length === 3;
}
const threeTokenNames = cleanedPeople.filter(hasThreeTokens);

const firstPhysicist = cleanedPeople.find(person => person.profession === 'physicist');
const firstAstrophysicistIndex = cleanedPeople.findIndex(person => person.profession === 'astrophysicist');
const allHaveProfession = cleanedPeople.every(person => Boolean(person.profession));

console.log(cleanedPeople);
console.log(chemists);
console.log(everyoneElse);
console.log(threeTokenNames);
console.log(firstPhysicist);
console.log(firstAstrophysicistIndex);
console.log(allHaveProfession);
