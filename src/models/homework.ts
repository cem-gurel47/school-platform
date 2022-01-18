interface IHomework {
  id: string;
  course: string;
  teacher: {
    name: string;
  };
  title: string;
  description: string;
  createdDate: string;
  deadline: string;
  submissions: {
    studentName: string;
    submissionDate: string;
    submissionFile: File;
  }[];
}

export default IHomework;