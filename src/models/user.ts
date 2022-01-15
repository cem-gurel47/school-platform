interface IUser {
  id: string;
  type: "Principle" | "Teacher" | "Student";
  name: string;
  email: string;
  password: string;
}

export default IUser;
