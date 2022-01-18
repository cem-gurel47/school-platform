import IUser from "../models/user";
import IHomework from "../models/homework";
import moment from "moment";

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

const homeworks: IHomework[] = [
  {
    id: "hw1",
    course: "CSI2132",
    teacher: { name: "Olubisi Runsewe" },
    title: "Introduction to DBMS",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Write a detailed report on the difference between logical data independence and physical data independence.",
    submissions: [
      {
        studentName: "John Doe",
        submissionDate: moment("dd/mm/yyyy").subtract(1, "day").toString(),
      },
      {
        studentName: "Michael Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "George Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "Lucas Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
    ],
  },
  {
    id: "hw2",
    course: "CEG3585",
    teacher: { name: "Miguel A. Garzón" },
    title: "Draw Network Layers",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Draw network layers discussed in class.Draw network layers discussed in class.Draw network layers discussed in class.",
    submissions: [
      {
        studentName: "John Doe",
        submissionDate: moment("dd/mm/yyyy").subtract(1, "day").toString(),
      },
      {
        studentName: "Michael Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "George Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "Lucas Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
    ],
  },
  {
    id: "hw3",
    course: "CSI3504",
    teacher: { name: "Mohamed Ali Ibrahim" },
    title: "P Class vs NP Class",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Write a detailed report on the difference between P Class and NP Class Write a detailed report on the difference between P Class and NP Class",
    submissions: [
      {
        studentName: "John Doe",
        submissionDate: moment("dd/mm/yyyy").subtract(1, "day").toString(),
      },
      {
        studentName: "Michael Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "George Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "Lucas Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
    ],
  },
  {
    id: "hw4",
    course: "CSI3531",
    teacher: { name: "Fadi Malek" },
    title: "Introduction to Operating Systems",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Write a detailed report on operating systems Write a detailed report on operating systems Write a detailed report on operating systems",
    submissions: [
      {
        studentName: "John Doe",
        submissionDate: moment("dd/mm/yyyy").subtract(1, "day").toString(),
      },
      {
        studentName: "Michael Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "George Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "Lucas Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
    ],
  },
];

export { homeworks };

export default users;
