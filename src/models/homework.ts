interface IHomework {
  id: string;
  course: string;
  teacher: {
    id: string;
    name: string;
  };
  title: string;
  description: string;
  createdDate: string;
  deadline: string;
  submissions: {
    studentName: string;
    submissionDate: string;
  }[];
}

export default IHomework;
