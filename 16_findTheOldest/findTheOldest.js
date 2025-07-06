const findTheOldest = function(people) {
    let oldestPerson = null;
    let maxAge = 0;
    const currentYear = new Date().getFullYear();

    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        const yearOfDeath = person.yearOfDeath || currentYear; 
        const age = yearOfDeath - person.yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
