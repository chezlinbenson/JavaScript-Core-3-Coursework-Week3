let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

function introduceTheHogwarts(hogwarts) {
  let { firstName, lastName, house, ...rest } = hogwarts;
  console.log(
    hogwarts[0].firstName,
    hogwarts[0].lastName,
    ",",
    hogwarts[1].firstName,
    hogwarts[1].lastName,
    ",",
    hogwarts[2].firstName,
    hogwarts[2].lastName,
    ",",
    hogwarts[8].firstName,
    hogwarts[8].lastName,
    ",",
    hogwarts[9].firstName,
    hogwarts[9].lastName,
    "is members of House",
    hogwarts[0].house,
    "."
  );
}

introduceTheHogwarts(hogwarts);

function teacherWithPet(hogwarts) {
  let { firstName, lastName } = hogwarts;
  console.log(
    hogwarts[9].firstName,
    hogwarts[9].lastName,
    "and his fiery",
    hogwarts[9].pet,
    "pet."
  );
}

teacherWithPet(hogwarts);
