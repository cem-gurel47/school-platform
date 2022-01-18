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
    teacher: { name: "Cem Gurel" },
    title: "Introduction to DBMS",
    createdDate: moment().subtract(1, "week").format("DD/MM/YYYY"),
    deadline: moment().add(1, "week").format("DD/MM/YYYY"),
    description:
      "Write a detailed report on the difference between logical data independence and physical data independence.",
    submissions: [
      {
        studentName: "John Doe",
        submissionDate: moment("dd/mm/yyyy").subtract(1, "day").toString(),
        submissionFile: new File(["The difference is..."], "homework.txt", {
          type: "text/plain",
          lastModified: new Date().getUTCSeconds(),
        }),
      },
      {
        studentName: "Michael Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
        submissionFile: new File(["The difference is..."], "homework.txt", {
          type: "text/plain",
          lastModified: new Date().getUTCSeconds(),
        }),
      },
      {
        studentName: "George Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
        submissionFile: new File(["The difference is..."], "homework.txt", {
          type: "text/plain",
          lastModified: new Date().getUTCSeconds(),
        }),
      },
      {
        studentName: "Lucas Doe",
        submissionDate: moment().subtract(1, "day").format("DD/MM/YYYY"),
        submissionFile: new File(["The difference is..."], "homework.txt", {
          type: "text/plain",
          lastModified: new Date().getUTCSeconds(),
        }),
      },
    ],
  },
];

export { homeworks };

export default users;
