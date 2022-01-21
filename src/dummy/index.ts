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
    name: "John Doe",
    email: "student@one.com",
    password: "student1",
    takingCourses: ["CEG3585", "CSI2132", "CSI3531"],
  },
  {
    id: "s2",
    type: "Student",
    name: "Michael Doe",
    email: "student@two.com",
    password: "student2",
    takingCourses: ["CEG3585", "CSI2132", "CSI3504", "CSI3531"],
  },
  {
    id: "s3",
    type: "Student",
    name: "George Doe",
    email: "student@three.com",
    password: "student3",
    takingCourses: ["CEG3585", "CSI2132", "CSI3504", "CSI3531"],
  },
  {
    id: "s4",
    type: "Student",
    name: "Lucas Doe",
    email: "student@four.com",
    password: "student4",
    takingCourses: ["CSI2132", "CEG3585", "CSI3504"],
  },
  {
    id: "t1",
    type: "Teacher",
    name: "Olubisi Runsewe",
    email: "teacher@one.com",
    password: "teacher1",
    students: [
      { name: "John Doe" },
      { name: "Michael Doe" },
      { name: "George Doe" },
      { name: "Lucas Doe" },
    ],
    teachingCourse: "CSI2132",
  },
  {
    id: "t2",
    type: "Teacher",
    name: "Miguel A. Garzón",
    email: "teacher@two.com",
    password: "teacher2",
    students: [
      { name: "John Doe" },
      { name: "Michael Doe" },
      { name: "George Doe" },
      { name: "Lucas Doe" },
    ],
    teachingCourse: "CEG3585",
  },
  {
    id: "t3",
    type: "Teacher",
    name: "Mohamed Ali Ibrahim",
    email: "teacher@three.com",
    password: "teacher3",
    students: [
      { name: "Michael Doe" },
      { name: "George Doe" },
      { name: "Lucas Doe" },
    ],
    teachingCourse: "CSI3504",
  },
  {
    id: "t4",
    type: "Teacher",
    name: "Fadi Malek",
    email: "teacher@four.com",
    password: "teacher4",
    students: [
      { name: "John Doe" },
      { name: "Michael Doe" },
      { name: "George Doe" },
    ],
    teachingCourse: "CSI3531",
  },
];

const homeworks: IHomework[] = [
  {
    id: "hw1",
    course: "CSI2132",
    teacher: { id: "t1", name: "Olubisi Runsewe" },
    title: "Introduction to DBMS",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Write a detailed report on the difference between logical data independence and physical data independence.",
    submissions: [
      {
        studentName: "John Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
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
    teacher: { id: "t2", name: "Miguel A. Garzón" },
    title: "Draw Network Layers",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Draw network layers discussed in class.Draw network layers discussed in class.Draw network layers discussed in class.",
    submissions: [
      {
        studentName: "John Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
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
    teacher: { id: "t3", name: "Mohamed Ali Ibrahim" },
    title: "P Class vs NP Class",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Write a detailed report on the difference between P Class and NP Class Write a detailed report on the difference between P Class and NP Class",
    submissions: [
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
    teacher: { id: "t4", name: "Fadi Malek" },
    title: "Introduction to Operating Systems",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Write a detailed report on operating systems Write a detailed report on operating systems Write a detailed report on operating systems",
    submissions: [
      {
        studentName: "John Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "Michael Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
      {
        studentName: "George Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
      },
    ],
  },
];

export { homeworks };

export const teachers = users.filter(({ type }) => type === "Teacher");

export default users;
