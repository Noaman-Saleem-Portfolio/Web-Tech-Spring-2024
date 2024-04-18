const student = {
  name: "Ali",
  age: 13,
  cgpa: 3.44,
  city: "Lahore",
};

const students = [
  {
    name: "Ali",
    age: 13,
    cgpa: 3.44,
    city: "Lahore",
  },
  {
    name: "Umair",
    age: 24,
    cgpa: 2.44,
    city: "Lahore",
  },
  {
    name: "Talha",
    age: 22,
    cgpa: 1.44,
    city: "Lahore",
  },
];

const umtStudent = {
  name: "Ali",
  age: 22,
  hobbies: ["Traveling", "Music", "Book Reading"],
  examMarks: {
    mid: 77,
    final: 86,
  },
};

//Shoping Cart Example

const address = {
  city: "Lahore",
  degree: "BSCS",
};

//spread operator
const studentInfo = { ...student, ...address };

// console.log(studentInfo);

//object destructring

const { city, degree } = address;

// console.log(degree);

// https://api.github.com/users/Noaman-Saleem-Portfolio

// https://randomuser.me/
