const findTheOldest = function(people) {
    const getAge = function getAge(person) {
        return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
    }
    
    return people.reduce((currentOldest, person) => getAge(person) > getAge(currentOldest) ? person : currentOldest);
    };

// Do not edit below this line
module.exports = findTheOldest;
