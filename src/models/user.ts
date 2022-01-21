interface IUser {
  id: string;
  type: "Principle" | "Teacher" | "Student";
  name: string;
  email: string;
  password: string;
  students?: { name: string }[];
  teachingCourse?: "CSI2132" | "CEG3585" | "CSI3504" | "CSI3531";
  takingCourses?: string[];
}

export default IUser;
