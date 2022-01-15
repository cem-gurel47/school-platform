import IUser from "../models/user";
const users: IUser[] = [
  {
    id: "p1",
    type: "Principle",
    name: "Principle One",
    email: "principle@one.com",
    password: "principle1",
  },
  {
    id: "s1",
    type: "Student",
    name: "Student One",
    email: "student@one.com",
    password: "student1",
  },
];

export default users;
